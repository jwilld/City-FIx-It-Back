const mongoose = require('./schema.js')
const TicketsData = require('./Tickets.json')
const AgenciesData = require("./Agencies.json")
const TicketModel = require("../models/Agency")
const AgencyModel = require("../models/Ticket")










// bookModel.remove({})
//   .then(somevariable => {
//     bookModel.collection.insert(bookData)
//       .then((somevariable) => {
//         console.log(somevariable)
//         process.exit()
//       })
//   })
//   .catch((err) => {
//     console.log(err)
//   })