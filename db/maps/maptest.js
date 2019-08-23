const mongoose = require('mongoose');
const connection = require("../../db/connection");
const Ticket = require('../../models/Ticket')
const axios = require('axios');

class axiosTest extends Component {
    componentDidMount() {
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




