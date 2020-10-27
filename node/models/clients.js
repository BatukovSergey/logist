const db = require('../db')
const ObjectID = require('mongodb').ObjectID

exports.all = (cb) => {
  db.get().collection('clients').find().toArray((err, docs) => {
    cb(err, docs)
  })
}
exports.findById = (id, cb) => {
  db.get().collection('clients').findOne({ _id: ObjectID(id) }, (err, doc) => {
    cb(err, doc)
  })
}
exports.create = (client, cb) => {
  db.get().collection('clients').insert(client, (err, result) => {
    cb(err, result)
  })
}

exports.update = (id, data, cb) => {
  db.get().collection('clients').updateOne(
    { _id: ObjectID(id) },
    data,
    (err, result) => {
      cb(err, result)
    }
  )
}

exports.delete = (id, cb) => {
  db.get().collection('clients').deleteOne(
    { _id: ObjectID(id) },
    (err, res) => {
      cb(err, res)
    }
  )
}