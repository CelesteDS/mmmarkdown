const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

// app.set('views', './views') <--  This defaults to the views directory in the application root directory.
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))


// app.use('/public/bundle.js', (req, res) => {
//   console.log('in bundle route')
//   res.send('./public/bundle.js')
// })

app.post('/save', (req, res) => {
  console.log(req.body)
})

app.use((req, res) => {
  console.log(req.body)
  res.render('index')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
