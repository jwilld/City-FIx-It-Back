const mongoose = require('mongoose')

mongoose.Promise = Promise 

mongoose.connect('mongodb://localhost/city-fix-it')
    .then(connection => console.log("connection established"))
    .catch(err => console.log("connection failed"), err)

module.exports = mongoose