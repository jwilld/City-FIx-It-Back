const Agency = require('../models/Agency')

module.exports = {
    show: (req, res) => Agency.find({})
        .then(agency => res.json(agency))
}
