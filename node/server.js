const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')
const clientsController = require('./controlers/clients')
const orderController = require('./controlers/order')
const cors = require('cors');
let port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.options('*', cors())

app.get('/', (req, res) => {
  res.send('Logist API')
})

app.get('/clients', clientsController.all)
app.get('/clients/:id', clientsController.findById)
app.post('/clients', clientsController.create)
app.put('/clients/:id', clientsController.update)
app.delete('/clients/:id', clientsController.delete)

app.get('/orders', orderController.all)
app.get('/orders/:id', orderController.findById)
app.post('/orders', orderController.create)
app.put('/orders/:id', orderController.update)
app.delete('/orders/:id', orderController.delete)

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