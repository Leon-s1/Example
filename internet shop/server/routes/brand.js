import express from 'express'

const router = new express.Router()

router.get('/getall', (req, res) => res.status(200).send('Список всех брендов'))
router.get('/getone/:id([0-9]+)', (req, res) => res.status(200).send('Получение одного бренда'))
router.post('/create', (req, res) => res.status(200).send('Создание нового бренда'))
router.put('/update/:id([0-9]+)', (req, res) => res.status(200).send('Обновление бренда'))
router.delete('/delete/:id([0-9]+)', (req, res) => res.status(200).send('Удаление бренда'))

export default router