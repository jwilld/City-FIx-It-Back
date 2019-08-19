const mongoose = require('../db/connection')

const Agencies = new mongoose.Schema({
    OfficeName: String,
    POCName: String,
    POCEmail: String,
    POCPhone: String
})

mongoose.model('Agencies', Agencies)

module.exports = mongoose 