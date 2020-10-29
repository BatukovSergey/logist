const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')
const controller = require('./controler')
const cors = require('cors');
let port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.options('*', cors())

app.get('/', (req, res) => {
  res.send('Logist API')
})

app.get('/clients', controller.all)
app.get('/clients/:id', controller.findById)
app.post('/clients', controller.create)
app.put('/clients/:id', controller.update)
app.delete('/clients/:id', controller.delete)

app.get('/orders', controller.all)
app.get('/orders/:id', controller.findById)
app.post('/orders', controller.create)
app.put('/orders/:id', controller.update)
app.delete('/orders/:id', controller.delete)

db.connect(
  'mongodb://localhost:27017/logist',
  (err) => {
    if (err) {
      return console.log(err)
    }
    app.listen(port, () => {
      console.log(`port: ${port}`)
    })
})