const Ticket = require('../models/Ticket')

module.exports = {
    create: (req, res) => Ticket.create(req.body)
        .then(ticket => res.json(ticket)),
    show: (req, res) => Ticket.find({})
        .then(ticket => res.json(ticket)),
    update: (req, res) => Ticket.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(ticket => res.json(ticket)),
    delete: (req, res) => Ticket.findOneAndDelete({ name: req.params.name })
        .then(ticket => res.json(ticket))
}