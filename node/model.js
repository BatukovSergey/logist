const db = require('./db')
const ObjectID = require('mongodb').ObjectID

exports.all = (collection, cb) => {
  db.get().collection(collection).find().toArray((err, docs) => {
    cb(err, docs)
  })
}
exports.findById = (params, cb) => {
  db.get().collection(params.col).findOne({ _id: ObjectID(params.id) }, (err, doc) => {
    cb(err, doc)
  })
}
exports.create = (params, cb) => {
  db.get().collection(params.col).insert(params.obj, (err, result) => {
    cb(err, result)
  })
}
exports.update = (params, data, cb) => {
  db.get().collection(params.col).updateOne(
    { _id: ObjectID(params.id) },
    data,
    (err, result) => {
      cb(err, result)
    }
  )
}
exports.delete = (params, cb) => {
  db.get().collection(params.col).deleteOne(
    { _id: ObjectID(params.id) },
    (err, res) => {
      cb(err, res)
    }
  )
}