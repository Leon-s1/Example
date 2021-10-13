const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const path = require('path')
const Handlebars = require('handlebars')


const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  // handlebars: allowInsecurePrototypeAccess(Handlebars),
  extname: 'hbs',
})

app.engine('hbs', hbs.engine)
// app.engine('hbs', exphbs({ hbs: allowInsecurePrototypeAccess(_handlebars) }))
// app.set('view engine', 'hbs')
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use('/logo', express.static(path.join(__dirname, 'logo')))
app.use(express.static(path.join(__dirname, 'public')))

app.use(
  express.urlencoded(
    { extended: true })
)
// app.use(express.static(path.join(__dirname, 'public')))

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
