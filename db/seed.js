const mongoose = require('./schema.js')
const TicketsData = require('./Tickets.json')
const AgenciesData = require("./Agencies.json")
const TicketModel = require("../models/Agency")
const AgencyModel = require("../models/Ticket")



TicketModel.remove({})
  .then(somevariable => {
    TicketModel.collection.insert(TicketsData)
      .then((somevariable) => {
        console.log(somevariable)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })

  AgencyModel.remove({})
  .then(somevariable => {
    AgencyModel.collection.insert(AgenciesData)
      .then((somevariable) => {
        console.log(somevariable)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })



  