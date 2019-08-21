const mongoose = require('../db/connection')

const Agency = new mongoose.Schema({
    office_name: String,
    poc: {
        name: String,
        email: String,
        phone: String
    }
})

module.exports = mongoose.model('Agency',Agency)