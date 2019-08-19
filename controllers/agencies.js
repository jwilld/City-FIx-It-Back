const Agency = require('../models/Agency')

module.exports = {
    show: (req, res) => Agency.find({})
        .then(agency => res.json(agency))
}

// find out if i need to add any others? 