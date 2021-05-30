const Sequelize = require('sequelize')
const dbConfig = require ('../config/database')

const Ceps = require('../model/Ceps')

const connection = new Sequelize(dbConfig)

Ceps.init(connection)

module.exports = connection