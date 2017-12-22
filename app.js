const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

// app.set('views', './views') <--  This defaults to the views directory in the application root directory.
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/save', (req, res) => {
  const { fileName, file } = req.body
  fs.writeFile(`./data/${fileName}.md`, file)
  res.status(200).send(`Success! ${fileName}.md saved`)
})

app.use((req, res) => {
  console.log(req.body)
  res.render('index')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
