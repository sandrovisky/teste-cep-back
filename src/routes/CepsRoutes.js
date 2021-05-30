const express = require('express')

const routes = express.Router()

const CepsController = require('../controllers/CepsController')

routes.get('/:cep', CepsController.index)
routes.post('', CepsController.store)

module.exports = routes