const MongoClient = require('mongodb').MongoClient

let state = {
  db: null
}

exports.connect = (url, done) => {
  if (state.db) {
    return done()
  }

  MongoClient.connect(
    url,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    },
    (err, db) => {
      if (err) {
        return done(err)
      }
    state.db = db.db('logist')
    done()
  })
}

exports.get = () => state.db