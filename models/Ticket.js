const mongoose = require('../db/connection')

const Ticket = new mongoose.Schema({
    address: {
        street: String,
        spartment: String,
        city: String,
        zipcode: String,
        state: String
    },
    type: String,
    priority: String,
    description: String,
    status: String,
    referred_to: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agency'
    }]
        ////THIS NEEDS TO BE EDITED EVENTUALLY
});

module.exports = mongoose.model('Ticket', Ticket)