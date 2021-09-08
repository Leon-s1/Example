const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Список сотрудников',
    isIndex: true,
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Добавить сотрудника',
    isCreate: true,
  })
})

module.exports = router
