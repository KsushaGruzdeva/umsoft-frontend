<script setup lang="ts">
onMounted(() => {
    //Кнопка вверх
    const btnUp = {
        el: document.querySelector('.btn-up') as HTMLElement | null,
        show() {
            // удалим у кнопки класс btn-up_hide
            this.el?.classList.remove('btn-up__hide');
        },
        hide() {
            // добавим к кнопке класс btn-up_hide
            this.el?.classList.add('btn-up__hide');
        },
        addEventListener() {
            // при прокрутке содержимого страницы
            window.addEventListener('scroll', () => {
                // определяем величину прокрутки
                const scrollY =
                    window.scrollY || document.documentElement.scrollTop;
                // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                scrollY > 1100 ? this.show() : this.hide();
            });
            // при нажатии на кнопку .btn-up
            document.querySelector<HTMLElement>('.btn-up')!.onclick = () => {
                // переместим в начало страницы
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            };
        },
    };
    
    btnUp.addEventListener();
});
</script>
<template>
    <div class="btn-up">{{}}</div>
</template>