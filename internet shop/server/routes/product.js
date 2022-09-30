import express from 'express'

const router = new express.Router()

router.get('/getall', (req, res) => res.status(200).send('Список всех товаров'))
router.get('/getone/:id([0-9]+)', (req, res) => res.status(200).send('Получение одного товара'))
router.post('/create', (req, res) => res.status(200).send('Создание нового товара'))
router.put('/update/:id([0-9]+)', (req, res) => res.status(200).send('Обновление товара'))
router.delete('/delete/:id([0-9]+)', (req, res) => res.status(200).send('Удаление товара'))

export default router