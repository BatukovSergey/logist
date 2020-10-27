const Clients = require('../models/clients')

exports.all = (req, res) => {
  Clients.all((err, docs) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(docs)
  })
}

exports.findById = (req, res) => {
  Clients.findById(req.params.id, (err, doc) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.create = (req, res) => {
  let client = req.body
  Clients.create(client, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(client)
  })
}

exports.update = (err, res) => {
  Clients.update(res.params.id, { name: req.body.name}, (err,result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })
}

exports.delete = (err, res) => {
  Clients.delete(res.params.id, (err,res) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })
}