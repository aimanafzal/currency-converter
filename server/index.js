const express = require('express')

const app = express()
const bodyParser = require('body-parser');

const router = require('./routes/route.js')

require('dotenv').config()
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
// cookieSession config


app.get('/api', (req, res, next) => {
    res.status(200).send(`Server is running on PORT ${process.env.PORT}`)
})
app.use('/api', router)

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`)
})