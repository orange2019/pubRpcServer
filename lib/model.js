const Sequelize = require('sequelize')
const config = require('./../config').db
// const Log = require('./log')

let model = () => {
  let DB

  let getDb = (opt) => {
    let dbname = opt.dbname
    let username = opt.username
    let password = opt.password
    let host = opt.host
    let port = opt.port

    return new Sequelize(dbname, username, password, {
      host: host,
      port: port,
      dialect: 'mysql',
      // operatorsAliases: false,

      pool: {
        max: opt.maxLimit || 300,
        min: 0,
        acquire: opt.acquire || 30000,
        idle: opt.odel || 10000
      },

    })
  }

  return {
    getInstance: () => {
      if (!DB) {
        DB = getDb(config)
      }

      return DB
    }
  }
}

const DB = model().getInstance()

class Model {
  constructor() {

  }

  db() {
    return DB
  }

  async getTrans() {
    return await DB.transaction()
  }

  async query(sql, replacements = null) {
    let opts = {}
    opts.type = DB.QueryTypes.SELECT
    if (replacements) opts.replacements = replacements
    return await DB.query(sql, opts)
  }
}

module.exports = Model