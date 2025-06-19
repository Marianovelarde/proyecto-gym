const express = require('express')

const {createPagosControllers} = require('../pagos/controllers/createPagosControllers')

const router = express.Router()

router.post('/', createPagosControllers)

module.exports = router