const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(parser.json())


app.use('/agencies', require('./routes/agencies'))
app.use('/tickets', require('./routes/tickets'))

app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//     console.log(`PORT: ${app.get("port")}`);
// });


app.listen(3001, () => console.log("listening on port 3001"))



//DO NOT ERASE THIS UNTIL PROJECT COMPLETION
// heroku config:set DB_URL="mongodb+srv://JerryDavidJamie:jdj123@cluster0-8mjuz.mongodb.net/test?retryWrites=true"

// heroku config:set DB_URL="mongodb+srv://JerryDavidJamie:jdj123@cluster0-8mjuz.mongodb.net/test?retryWrites=true"




