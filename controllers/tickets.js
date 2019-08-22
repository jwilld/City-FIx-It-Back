const Ticket = require("../models/Ticket");

module.exports = {
  create: (req, res) =>
    Ticket.create(req.body).then(ticket => res.json(ticket)),
  show: (req, res) => Ticket.find({}).then(ticket => res.json(ticket)),
  showId: (req, res) =>
    Ticket.findOne({ _id: req.params.id }).then(ticket => res.json(ticket)),
  update: (req, res) =>
    Ticket.findOneAndUpdate({ name: req.params.name }, req.body).then(ticket =>
      res.json(ticket)
    ),
  delete: (req, res) =>
    Ticket.findOneAndDelete({ name: req.params.name }).then(ticket =>
      res.json(ticket)
    )
};
