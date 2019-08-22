const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/tickets')

router.post('/create', ticketController.create)
router.get('/', ticketController.show)
router.put('/:id', ticketController.update)
router.delete('/delete/:name', ticketController.delete)

module.exports = router