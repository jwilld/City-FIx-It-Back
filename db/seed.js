const connection = require("./connection");
const TicketsData = require('./Tickets.json')
const AgenciesData = require("./Agencies.json")
const AgencyModel = require("../models/Agency")
const TicketModel = require("../models/Ticket")

// AgencyModel.create({AgenciesData})

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



