const { Router } = require('express')
const router = Router()

// router.use(express.static(__dirname + '/logo/'))

// router.get('logo/STS_logo.jpg', (req, res) => {
//   res.set('Content-Type', 'image/png')
//   res.send(body)
// })

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
