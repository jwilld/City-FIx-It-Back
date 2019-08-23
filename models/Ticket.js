const mongoose = require('../db/connection')

const Ticket = new mongoose.Schema({
    address: String,
    type: String,
    priority: String,
    description: String,
    status: String,
    referred_to: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agency'
    }]
});

module.exports = mongoose.model('Ticket', Ticket)