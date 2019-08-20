const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(parser.json())


app.use('/agencies', require('./routes/agencies'))
app.use('/tickets', require('./routes/tickets'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")}`);
});


// app.listen(3001, () => console.log("listening on port 3001"))


// mongodb+srv://JerryDavidJamie:JerryDavidJamie???@cluster0-rajxf.mongodb.net/test?retryWrites=true&w=majority


// mongodb+srv://JerryDavidJamie:JerryDavidJamie???@cluster0-rajxf.mongodb.net/test?retryWrites=true&w=majority

// heroku config:set DB_URL="mongodb+srv://JerryDavidJamie:JerryDavidJamie???@cluster0-8mjuz.mongodb.net/test?retryWrites=true"





