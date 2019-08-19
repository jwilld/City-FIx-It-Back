const mongoose = require('../db/connection')

const Agency = new mongoose.Schema({
    OfficeName: String,
    POC: {
        Name: String,
        Email: String,
        Phone: String
    }
})

module.exports = mongoose.model('Agency',Agency)