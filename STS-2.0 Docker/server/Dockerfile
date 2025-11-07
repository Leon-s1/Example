# Используем образ дистрибутив линукс Alpine с версией Node -22 Node.js
FROM node:22-alpine

# Указываем нашу рабочую дерикторию
WORKDIR /app

# Копируем package.json и package-lock.json внутрь контейнера
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем оставшееся приложение в контейнер
COPY . .

# Открываем порт 3001 в нашем контейнере
EXPOSE 3001



# Запускаем сервер
CMD [ "npm", "run", "start" ]