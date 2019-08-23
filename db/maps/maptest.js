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
            .then(response => {

            })
            .catch(err => {
                console.log(err);
            })
        //end of component did mount
    }
    render() {
        return (
            <div>

            </div>
        )
    }
    //end of component
}





















//DELETE THIS
    //   class Price extends Component {
    //     componentDidMount() {
    //       const currency = this.props.match.params.currency;
    //       const url = ${coindeskURL}${currency}.json;
    //       axios
    //         .get(url)
    //         .then(response => {
    //           let newPrice = response.data.bpi[currency].rate;
    //           this.props.setPrice(newPrice);
    //         })
    //         .catch(err => {
    //           console.error(err);
    //         });
    //     }
    //     render() {
    //       return (
    //         <div>
    //           <h1>Bitcoin price in {this.props.match.params.currency}</h1>
    //           <div className=“price”>{this.props.price}</div>
    //         </div>
    //       );
    //     }
    //    }