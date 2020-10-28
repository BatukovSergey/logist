const Order = require('../models/order')

exports.all = (req, res) => {
  Order.all((err, docs) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(docs)
  })
}

exports.findById = (req, res) => {
  Order.findById(req.params.id, (err, doc) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.create = (req, res) => {
  let client = req.body
  Order.create(client, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(client)
  })
}

exports.update = (err, res) => {
  Order.update(res.params.id, { name: req.body.name}, (err,result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })
}

exports.delete = (err, res) => {
  Order.delete(res.params.id, (err,res) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })
}