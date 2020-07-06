const express = require('express')
const router = express.Router()



var currencyApi = require('../modal/currencyApi');



// Logout route
router.get('/get_currency', (req, res) => {
    console.log('Currency Route Called');
    var object = new currencyApi()
    object.get()
});

module.exports = router 