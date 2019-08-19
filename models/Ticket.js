const mongoose = require('../db/connection')

const Ticket = new mongoose.Schema({
    Address: {
        Street: String,
        Apartment: String,
        City: String,
        Zipcode: String,
        State: String
    },
    Type: String,
    Priority: String,
    Description: String,
    Status: String,
    ReferredTo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ReferredTo'
    }]
        ////THIS NEEDS TO BE EDITED EVENTUALLY
});

module.exports = mongoose.model('Ticket', Ticket)