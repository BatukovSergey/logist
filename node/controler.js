const Model = require('./model')

const collection = (req) => {
  let name = req.originalUrl.slice(1)
  let index = name.indexOf('/')
  return name = index > 0 ? name.slice(0, index) : name
}


exports.all = (req, res) => {
  Model.all(collection(req), (err, docs) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(docs)
  })
}

exports.findById = (req, res) => {
  Model.findById({col: collection(req), id: req.params.id }, (err, doc) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.create = (req, res) => {
  let obj = req.body
  Model.create({col: collection(req), obj }, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(obj)
  })
}

exports.update = (err, res) => {
  Model.update({col: collection(req), id:res.params.id}, { name: req.body.name}, (err,result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })
}

exports.delete = (err, res) => {
  Model.delete({col: collection(req), id:res.params.id}, (err,res) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })
}

// exports.auth = (req, res) => {
//   let user = {
//     login:req.params.login, 
//     password: req.body.password
//   }
//   Model.auth(user, (err, doc) => {
//     if (err) {
//       console.log(err)
//       return res.sendStatus(500)
//     }
//     res.send(doc)
//   })
// }