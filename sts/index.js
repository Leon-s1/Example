const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
})

// app.get('/', express.static(path.join(__dirname, '.././logo')))

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
// app.set('logo', 'logo')

// app.use('/logo', express.static('logo'))
// app.use(express.static(__dirname + 'logo/'))

// app.use(express.static(path.join(__dirname, 'logo')))
app.use('/logo', express.static(path.join(__dirname, 'logo')))

app.use(todoRoutes)

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://sergey:1q2w3e4r@cluster0.lhjum.mongodb.net/todos'
    )
    app.listen(PORT, () => {
      console.log('Sever has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()
