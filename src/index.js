const express = require('express')
const {engine} = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.engine('handlebars', engine())
app.set('view engine','handlebars')
app.set("views", path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home.hbs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})