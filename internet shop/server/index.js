import config from 'dotenv/config'
import express from 'express'
import sequelize from "./sequelize.js";   //Нужно было прописывать файл с расширением js. А так не запускался сервер и не создавались таблицы.
import * as mapping from './models/mapping.js'
import cors from 'cors'
import router from './routes/index.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//Обрабатываем GET запрос
app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello World!'})
})
// Обрабатываем POST запрос
app.post('/',(req, res) => {
    res.status(200).json(req.body)
})



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