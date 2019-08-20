// const mongoose = require('mongoose')

// mongoose.Promise = Promise 

// mongoose.connect('mongodb://localhost/city-fix-it')
//     .then(connection => console.log("connection established"))
//     .catch(err => console.log("connection failed",err))

// module.exports = mongoose 

// const mongoose = require('mongoose')

// let mongoURI = ""

// if (process.env.NODE_ENV === "production") {
//     mongoURI = process.env.DB_URL;
// } else {
//     mongoURI = "mongodb://localhost/city-fix-it";
// }

// module.exports = mongoose


//keep these for troubleshooting
// console.log(process.env)
// console.log(process.env.DB_URL)
// console.log(process)


// TEMPORARY - DELETE this
// process.env.DB_URL = "mongodb://localhost/city-fix-it"


const mongoose = require("mongoose")

mongoose.Promise = Promise;

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
    console.log(mongoURI)
   } else {
    mongoURI = "mongodb://localhost/city-fix-it";
   }

mongoose
 .connect(mongoURI, { useNewUrlParser: true })
 .then(instance =>
   console.log(`Connected to db: ${instance.connections[0].name}`)
 )
 .catch(error => console.log("Connection failed!", error));

module.exports = mongoose 