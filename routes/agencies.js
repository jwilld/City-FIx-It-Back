const express = require('express')
const router = express.Router()
const agencyController = require('../controllers/agencies')

router.get('/', agencyController.show)

module.exports = router