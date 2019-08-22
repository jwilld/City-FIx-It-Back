const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/tickets')

router.post('/create', ticketController.create)
router.get('/', ticketController.show)
router.get('/:id',ticketController.showId )
router.put('/', ticketController.update)
router.delete('/delete/:name', ticketController.delete)

module.exports = router