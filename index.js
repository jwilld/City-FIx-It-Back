const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

//eventually add in controllers 'const controller' here once filled out

const app = express()

app.use(cors())
app.use(parser.json())

//eventually add in controllers 'app.use' here once filled out

app.listen(3001, () => console.log("listening on port 3001"))