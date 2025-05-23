import config from 'dotenv/config'
import express from 'express'
import sequelize from './sequelize.js' //Нужно было прописывать файл с расширением js. А так не запускался сервер и не создавались таблицы.
import * as mapping from './models/mapping.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import router from './routes/index.js'
import errorMiddleware from './middleware/errorMiddleware.js'
// import ErrorHandler from "./middleware/ErrorHandler.js";

const PORT = process.env.PORT || 5000

const app = express()
// Совместное использование ресурсов между источниками
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
// middleware для работы с json
app.use(express.json()) //использовать перед router
// middleware для статики (img, css)
app.use(express.static('static'))
// middleware для загрузки файлов
app.use(fileUpload())
//middleware для работы с cookie
app.use(cookieParser(process.env.SECRET_KEY))
// все маршруты приложения
app.use('/api', router)
//Обработка ошибок !!!! Middleware который работает с ошибками, должен идти и регистрироваться обязательно в самом конце !!!!
// app.use(ErrorHandler)
app.use(errorMiddleware)

// Обрабатываем GET запрос
// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Hello World!'})
// })
// Обрабатываем POST запрос
// app.post('/',(req, res) => {
//     res.status(200).json(req.body)
// })

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log('Сервер запущен на порту', PORT))
  } catch (e) {
    console.log(e)
  }
}

start()
