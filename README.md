# umsoft-frontend

Frontend для веб-приложения IT-аккредитации. SPA на Nuxt 3 с SSR.

## О проекте

Клиентская часть сайта-визитки для прохождения IT-аккредитации. Форма заявки, дашборд, интеграция с backend на Java / Spring Boot и GigaChat API.

## Стек

- Nuxt 3 (SPA + SSR)
- Vue 3
- JavaScript / TypeScript
- HTML5, CSS3
- Docker, Nginx
- REST API

## Что реализовано

- Главная страница с информацией о компании
- Форма обратной связи с валидацией
- Дашборд с заявками
- Адаптив под desktop и mobile
- Компонентный подход: переиспользуемые UI-блоки (header, footer, modal, button)
- Интеграция с REST API backend
- Docker-образ для production-сборки

## Структура
```
app/
├── components/ # Vue-компоненты
├── composables/ # Переиспользуемая логика
├── layouts/ # Шаблоны страниц
├── pages/ # Страницы
└── assets/ # Стили и шрифты
```

## Запуск

```bash
npm install
npm run dev
```

Приложение доступно на http://localhost:3000.
