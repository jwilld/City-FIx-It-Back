const mongoose = require('../db/connection')

const Agency = new mongoose.Schema({
    OfficeName: String,
    POCName: String,
    POCEmail: String,
    POCPhone: String
})

mongoose.model('Agency', Agency)

module.exports = mongoose 