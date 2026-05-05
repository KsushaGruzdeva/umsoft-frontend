# Этап 1: Сборка
FROM node:22-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./
COPY .env.production ./.env.production

# Устанавливаем зависимости
RUN npm ci --only=production && npm cache clean --force

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Этап 2: Запуск
FROM node:22-alpine AS runner

WORKDIR /app

# Копируем собранное приложение из этапа сборки
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Создаем пользователя без прав root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nuxtjs -u 1001 && \
    chown -R nuxtjs:nodejs /app

USER nuxtjs

# Порт для приложения
EXPOSE 3000

# Переменные окружения для production
ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV PORT=3000

# Запуск сервера
CMD ["node", ".output/server/index.mjs"]