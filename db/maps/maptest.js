//make sure this is connected correct
const mongoose = require('mongoose');
const connection = require("../../db/connection");
const Ticket = require('../../models/Ticket')

//original non-looped version
// const TicketData = Ticket.find(function (err, tickets) {
//     if (err) return console.error(err);
//     console.log(tickets.length);
//     thisStreet = tickets[0].Address.Street
//     thisCity = tickets[0].Address.City
//     thisZip = tickets[0].Address.Zipcode
//     thisState = tickets[0].Address.State
//     thisAddress = thisStreet + ", " + thisCity + " " + thisState + " " + thisZip
//     console.log(thisAddress)
//   })

//this does not store the variable globally
// const TicketData = Ticket.find(function (err, tickets) {
//     if (err) return console.error(err);
//     const ticketAddressesArray = []
//     for (let i = 0; i < tickets.length; i++) {
//         thisStreet = tickets[i].Address.Street
//         thisCity = tickets[i].Address.City
//         thisZip = tickets[i].Address.Zipcode
//         thisState = tickets[i].Address.State
//         thisAddress = thisStreet + ", " + thisCity + ", " + thisState + " " + thisZip

//         // console.log(thisAddress)
//         ticketAddressesArray.push(thisAddress)
//         console.log(ticketAddressesArray)
//     }   
//   })


const TicketData = Ticket.find(function (err, tickets) {
        if (err) return console.error(err);
        const ticketAddressesArray = []
        for (let i = 0; i < tickets.length; i++) {
            thisStreet = tickets[i].Address.Street
            thisCity = tickets[i].Address.City
            thisZip = tickets[i].Address.Zipcode
            thisState = tickets[i].Address.State
            thisAddress = thisStreet + ", " + thisCity + ", " + thisState + " " + thisZip
    
            // console.log(thisAddress)
            ticketAddressesArray.push(thisAddress)
            console.log(ticketAddressesArray)
        }   
      })
    