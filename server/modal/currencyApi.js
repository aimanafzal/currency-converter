const axios = require('axios');

class currencyAPI {
    constructor() {
        
    }
    get = async () => {

        // axios
        //     .get("https://open.exchangerate-api.com/v6/latest")
        //     .then(response => {
        //         const currencyAr = ["EUR"]
        //         for (const key in response.data.rates) {
        //             currencyAr.push(key)
        //         }
        //         return currencyAPI
        //     })
        //     .catch(err => {
        //         console.log("Oops, something broke with GET in componentDidMount() - we've got a: ", err.message);
        //     });

        var result = await axios.get("https://open.exchangerate-api.com/v6/latest")
        const currencyAr = ["EUR"]
        for (const key in result.data.rates) {
            currencyAr.push(key)
        }
        console.log(currencyAr)
    }
}

module.exports = {currencyAPI}