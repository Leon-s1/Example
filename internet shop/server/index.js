import config from 'dotenv/config'
import express from 'express'

const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, () => console.log('Сервер запущен на порту', PORT))