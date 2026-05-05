<template>
  <Teleport to="body">
    <div v-if="isOpen" class="simple-modal-overlay" @click="closeModal">
      <div class="simple-modal" @click.stop>
        <button class="simple-modal-close" @click="closeModal">×</button>

        <div class="simple-form">
          <div class="simple-title">Заполните форму, чтобы мы связались с вами</div>

          <!-- Поле ФИО -->
          <div class="simple-field">
            <label class="simple-label">ФИО</label>
            <input v-model="form.fio" type="text" class="simple-input" />
          </div>

          <!-- Поле Телефон (с маской и +7) -->
          <div class="simple-field">
            <label class="simple-label">Ваш телефон</label>
            <input
              ref="phoneInput"
              v-model="form.phone"
              type="tel"
              class="simple-input"
              placeholder="+7 (000) 000-00-00"
              @focus="handlePhoneFocus"
            />
          </div>

          <!-- Поле Email -->
          <div class="simple-field">
            <label class="simple-label">Email</label>
            <input v-model="form.email" type="email" class="simple-input" />
          </div>

          <!-- Поле Описание задачи -->
          <div class="simple-field">
            <label class="simple-label">Описание задачи</label>
            <textarea v-model="form.task" rows="4" class="simple-textarea"></textarea>
          </div>

          <!-- Кнопка отправки -->
          <button class="simple-button" @click="submitForm" :disabled="!isFormValid || loading">
            {{ loading ? 'Отправка...' : 'Оставить заявку' }}
          </button>

          <!-- Сообщения -->
          <div v-if="successMessage" class="simple-success">{{ successMessage }}</div>
          <div v-if="errorMessage" class="simple-error">{{ errorMessage }}</div>

          <!-- Согласие на обработку -->
          <div class="modal-form__caption">
            Нажимая на кнопку «Оставить заявку», вы подтверждаете свое согласие на
            <a
              class="modal-form__link"
              href="https://www.umserv.ru/upload/personal-data-regulation-processing.pdf"
              target="_blank"
            >Обработку персональных данных</a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { reactive, ref, watch, computed, nextTick } from 'vue'

const props = defineProps(['isOpen'])
const emit = defineEmits(['close'])

const form = reactive({
  fio: '',
  email: '',
  phone: '',
  task: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const phoneInput = ref(null)

// Валидация формы - кнопка активна только когда заполнены ФИО и Email
const isFormValid = computed(() => {
  return form.fio.trim() !== '' && form.email.trim() !== ''
})

// Маска для телефона с +7: +7 (XXX) XXX-XX-XX
function formatPhoneNumber(value) {
  if (!value) return ''
  
  // Удаляем все нецифровые символы, но сохраняем + если он есть в начале
  let cleaned = value.replace(/\D/g, '')
  
  // Если номер начинается с 8, заменяем на 7
  if (cleaned.startsWith('8')) {
    cleaned = '7' + cleaned.slice(1)
  }
  
  // Ограничиваем 11 цифрами (7 + 10 цифр)
  cleaned = cleaned.slice(0, 11)
  
  let formatted = '+7'
  if (cleaned.length > 1) {
    formatted += ' (' + cleaned.slice(1, 4)
  }
  if (cleaned.length >= 5) {
    formatted += ') ' + cleaned.slice(4, 7)
  }
  if (cleaned.length >= 8) {
    formatted += '-' + cleaned.slice(7, 9)
  }
  if (cleaned.length >= 10) {
    formatted += '-' + cleaned.slice(9, 11)
  }
  return formatted
}

// Обработчик фокуса на поле телефона
const handlePhoneFocus = () => {
  if (!form.phone || form.phone === '') {
    form.phone = '+7'
  }
}

// Следим за полем телефона и применяем маску
watch(() => form.phone, (newVal, oldVal) => {
  // Если пользователь удаляет всё содержимое
  if (newVal === '' || newVal === '+7') {
    form.phone = '+7'
    return
  }
  
  const formatted = formatPhoneNumber(newVal)
  if (newVal !== formatted) {
    form.phone = formatted
  }
})

// При открытии модалки устанавливаем +7 в поле телефона
watch(() => props.isOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    if (!form.phone || form.phone === '') {
      form.phone = '+7'
    }
  }
})

const closeModal = () => {
  emit('close')
  setTimeout(() => {
    form.fio = ''
    form.email = ''
    form.phone = '+7'
    form.task = ''
    successMessage.value = ''
    errorMessage.value = ''
  }, 300)
}

const submitForm = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!form.fio.trim()) {
    errorMessage.value = 'Пожалуйста, укажите ФИО'
    return
  }

  if (!form.email.trim()) {
    errorMessage.value = 'Пожалуйста, укажите Email'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errorMessage.value = 'Укажите корректный Email'
    return
  }

  loading.value = true

  // Очищаем телефон от нецифровых символов для отправки на бэкенд
  const cleanPhone = form.phone.replace(/\D/g, '')
  
  const data = {
    fio: form.fio.trim(),
    email: form.email.trim(),
    task: form.task.trim(),
    phone: cleanPhone || ''
  }

  try {
    const API_BASE = import.meta.env.VITE_API_URL || '/api'

    const response = await fetch(`${API_BASE}/requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    
    const result = await response.json()

    if (response.ok && result.success) {
      successMessage.value = result.message || 'Заявка успешно отправлена!'
      
      setTimeout(() => {
        closeModal()
      }, 2000)
    } else {
      errorMessage.value = result.message || 'Произошла ошибка. Попробуйте позже.'
    }
  } catch (error) {
    errorMessage.value = 'Не удалось подключиться к серверу'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Оверлей */
.simple-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

/* Модальное окно с красивым скроллом */
.simple-modal {
  background: white;
  width: 90%;
  max-width: 520px;
  position: relative;
  padding: 48px 32px 40px;
  max-height: 85vh;
  overflow-y: auto;
}

/* Стилизованная полоса прокрутки */
.simple-modal::-webkit-scrollbar {
  width: 6px;
}

.simple-modal::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.simple-modal::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.simple-modal::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Для Firefox */
.simple-modal {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
}

/* Кнопка закрытия - хорошо видна на мобилке */
.simple-modal-close {
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 32px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.simple-modal-close:hover {
  color: #000;
}

/* Форма */
.simple-form {
  width: 100%;
}

/* Заголовок */
.simple-title {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 32px;
  color: #1a1a1a;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
}

/* Поля с лейблами */
.simple-field {
  margin-bottom: 24px;
}

.simple-label {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
}

.simple-input,
.simple-textarea {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  background: transparent;
}

.simple-input:focus,
.simple-textarea:focus {
  border-bottom-color: #1a1a1a;
}

.simple-textarea {
  resize: vertical;
  min-height: 80px;
}

/* Кнопка */
.simple-button {
  width: 100%;
  padding: 14px;
  background: #1a1a1a;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 16px;
  font-family: 'Montserrat', sans-serif;
  transition: background 0.2s;
}

.simple-button:hover:not(:disabled) {
  background: #333;
}

.simple-button:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Сообщения */
.simple-success {
  margin-top: 20px;
  padding: 12px;
  background: #e8f5e9;
  color: #2e7d32;
  text-align: center;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
}

.simple-error {
  margin-top: 20px;
  padding: 12px;
  background: #ffebee;
  color: #c62828;
  text-align: center;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
}

/* Ссылка на согласие */
.modal-form__caption {
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  color: #888;
  font-family: 'Montserrat', sans-serif;
}

.modal-form__link {
  color: #1a1a1a;
  text-decoration: underline;
  cursor: pointer;
}

.modal-form__link:hover {
  color: #555;
}

/* Адаптив */
@media (max-width: 600px) {
  .simple-modal {
    padding: 48px 20px 32px;
    width: 95%;
    max-height: 90vh;
  }

  .simple-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .simple-modal-close {
    top: 12px;
    right: 16px;
    font-size: 32px;
  }

  .simple-input,
  .simple-textarea {
    font-size: 15px;
  }

  .simple-button {
    padding: 12px;
    font-size: 15px;
  }
}

@media (max-width: 450px) {
  .simple-modal {
    padding: 48px 16px 28px;
  }

  .simple-title {
    font-size: 18px;
  }

  .simple-input,
  .simple-textarea {
    font-size: 14px;
  }

  .simple-button {
    padding: 12px;
    font-size: 14px;
  }
}
</style>