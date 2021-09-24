const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const path = require('path')
const _handlebars = require('handlebars')

const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
})

app.engine('hbs', hbs.engine)
// app.engine('hbs', exphbs({ hbs: allowInsecurePrototypeAccess(_handlebars) }))
// app.set('view engine', 'hbs')
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use('/logo', express.static(path.join(__dirname, 'logo')))

app.use(
  express.urlencoded(
    { extended: true }
    // {
    //   allowedProtoMethods: {
    //     trim: true,
    //   },
    // }
  )
)

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
