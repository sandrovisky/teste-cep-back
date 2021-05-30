const express = require('express')
const routes = express.Router()

const CepsRoutes = require('./routes/CepsRoutes')
routes.use('/ceps', CepsRoutes)

module.exports = routes;