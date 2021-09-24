const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

// router.use(express.static(__dirname + '/logo/'))

// router.get('logo/STS_logo.jpg', (req, res) => {
//   res.set('Content-Type', 'image/png')
//   res.send(body)
// })

router.get('/', async (req, res) => {
  const todos = await Todo.find({})
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
