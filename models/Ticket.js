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
    ReferredTo: {
        Agency: {
            href: String
        } 
        ////THIS NEEDS TO BE EDITED EVENTUALLY
    }
});

mongoose.model('Ticket', Ticket)

module.exports = mongoose