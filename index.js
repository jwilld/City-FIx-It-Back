const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(parser.json())

app.use('/agencies', require('./routes/agencies'))
app.use('/tickets', require('./routes/tickets'))

app.listen(3001, () => console.log("listening on port 3001"))