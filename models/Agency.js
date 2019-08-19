const mongoose = require('../db/connection')

const Agency = new mongoose.Schema({
    OfficeName: String,
    POC: {
        Name: String,
        Email: String,
        Phone: String
    }
})

mongoose.model('Agency', Agency)

module.exports = mongoose 