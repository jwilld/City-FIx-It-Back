//make sure this is connected correct
const mongoose = require('mongoose');
const connection = require("../../db/connection");
const Ticket = require('../../models/Ticket')
const axios = require('axios');

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

//temporarily shut this down 
// const TicketData = Ticket.find(function (err, tickets) {
//         if (err) return console.error(err);
//         const ticketAddressesArray = []
//         for (let i = 0; i < tickets.length; i++) {
//             thisStreet = tickets[i].Address.Street
//             thisCity = tickets[i].Address.City
//             thisZip = tickets[i].Address.Zipcode
//             thisState = tickets[i].Address.State
//             // thisAddress = thisStreet + ", " + thisCity + ", " + thisState + " " + thisZip
//             thisAddress = `${thisStreet}, ${thisCity}, ${thisState} ${thisZip}`
//             // console.log(thisAddress)
//             ticketAddressesArray.push(thisAddress)  
//         } 
//         // console.log(ticketAddressesArray)
//         var URLSArray = []
//         for (let i = 0; i < ticketAddressesArray.length; i++) {
//             var URLTotal = `https://maps.googleapis.com/maps/api/geocode/json?address=${ticketAddressesArray[i]}&key=AIzaSyAGIIycqco2n6BTluRgIHy_G7rjmFBerlk`
//             URLSArray.push(URLTotal)
//             // console.log(URLSArray)            
//             //    .then(response => this.setState({placeId:response.data}))
//             //    .catch(err => {
//             //      console.log(err)                     //Axios entire error message
//             //      console.log(err.response.data.error) //Google API error message 
//             //    })

//         }
//         axios.get(URLTotal)
//         // return URLSArray
//       }).then((URLSArray) => {
//         console.log(URLSArray)
//       }).then((res) => {
//         console.log(res)
//       })



// class axiosTest extends Component {
//     componentDidMount() {
//         const thisAddress = '1921 8th ST NW, Washington, DC 20001'
//         const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${thisAddress}&key=AIzaSyAGIIycqco2n6BTluRgIHy_G7rjmFBerlk`
//         axios
//             .get(url)
//             .then(response => {

//             })
//             .catch(err => {
//                 console.log(err);
//             })
//         //end of component did mount
//     }
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
//     //end of component
// }




const thisAddress = '1921 8th ST NW, Washington, DC 20001'
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${thisAddress}&key=AIzaSyAGIIycqco2n6BTluRgIHy_G7rjmFBerlk`
axios
            .get(url)
            .then(res => {
                console.log(res.data.results[0].geometry.location.lat);
                console.log(res.data.results[0].geometry.location.lng);
                let thisLat = res.data.results[0].geometry.location.lat;
                let thisLong = res.data.results[0].geometry.location.lng;

            })
            .catch(err => {
                console.log(err);
            })




