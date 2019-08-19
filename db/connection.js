// const mongoose = require('mongoose')

// mongoose.Promise = Promise 

// mongoose.connect('mongodb://localhost/city-fix-it')
//     .then(connection => console.log("connection established"))
//     .catch(err => console.log("connection failed",err))

// module.exports = mongoose 

const mongoose = require('mongoose')
let mongoURI = ""

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost/city-fix-it";
}

module.exports = mongoose