const mongoose = require('../db/connection')

const Ticket = new mongoose.Schema({
    Address: {
        Street: String,
        Apartment: String,
        City: String,
        Zipcode: String,
        State: String
    },
    Type: {
        Repair: String,
        Trash: String,
        Vehicle: String,
        Vandalism: String,
        Other: String
    },
    Priority: {
        Routine: String,
        Urgent: String
    },
    Description: String,
    Status: {
        Cancel: String,
        NoAction: String,
        Emergency: String,
        Referal: String
    },
    ReferredTo: {
        Agency: {
            href: String
        }
    }
});

mongoose.model('Ticket', Ticket)

module.exports = mongoose