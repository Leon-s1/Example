const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) => {
  const todos = await Todo.find({}).lean()
  res.render('index', {
    title: 'Список сотрудников',
    isIndex: true,
    todos,
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Добавить сотрудника',
    isCreate: true,
  })
})

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
     })
  await todo.save()
  res.redirect('/')
})

module.exports = router