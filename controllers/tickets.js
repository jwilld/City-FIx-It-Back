const express = require('express')
const router = express.Router()

const mongoose = require('../models/Ticket')
const Ticket = mongoose.model('Ticket')

router.get('/', (req, res) => {
    Ticket.find({})
        .then(tickets => res.json(tickets))
})

module.exports = router 