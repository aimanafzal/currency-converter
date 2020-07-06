import React, { Component } from "react";
import axios from "axios";
import './Converter.css';
import config from './config/config.json'

export default class Converter extends Component {
    state = {
        result: null,
        fromCurrency: "USD",
        toCurrency: "GBP",
        amount: 0,
        currencies: [],
        internet: "Offline",
        readOnly: true
    };

    detectInternetConnection() {
        if (navigator.onLine) {
            this.setState({ internet: "Online", readOnly: false })
            return "Online";
        }
        else {
            this.setState({ internet: "Offline", readOnly: true })
            return "Offline";
        }
    }
    // Initializes the currencies with values from the Openrates API
    async componentDidMount() {
        try {
            setInterval(async () => {
                this.detectInternetConnection()
            }, 30000);
        } catch (e) {
            console.log(e);
        }

        if (this.detectInternetConnection() === "Online") {

            
            var result = await axios.get(`${config.URL}`)
            if (result) {
                const currencyAr = ["EUR"]
                for (const key in result.data.rates) {
                    currencyAr.push(key)
                }
                this.setState({ currencies: currencyAr.sort() })
            } else {
                console.log("Oops, something broke with GET in componentDidMount() - we've got an error ");
            }
        }
    }


    convertHandler = async () => {
        if (this.detectInternetConnection() === "Online") {
            if (this.state.fromCurrency !== this.state.toCurrency) {

                var result = await axios.get(`${config.URL}`)
                if (result) {
                    var data = result.data.rates
                    var calculate = (this.state.amount * data[this.state.fromCurrency]) * data[this.state.toCurrency]
                    this.setState({ result: calculate })
                }
                else {
                    this.setState({ result: "You can't convert the same currency!" })
                }

            } else {
                this.setState({ result: "You can't convert the same currency!" })
            }
        }
    };

    // Updates the states based on the dropdown that was changed
    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value })
        }
    }

    currencyFormat = (amount) => {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: this.state.toCurrency,
        });

        return formatter.format(amount);
    }

    render() {
        return (
            <div className="Converter">
                <div >
                    Internet is {this.state.internet}
                </div>

                <h2><span>Currency </span> Converter
                <div className="Form" >
                        <input
                            name="amount"
                            type="text"
                            value={this.state.amount}
                            onChange={event =>
                                this.setState({ amount: event.target.value })
                            }
                            onKeyDown={this.convertHandler}
                            readOnly={this.state.readOnly}>
                        </input>

                        <select
                            name="from"
                            onChange={(event) => this.selectHandler(event)}
                            value={this.state.fromCurrency} readOnly={this.state.readOnly}>

                            {this.state.currencies.map((cur, index) => (
                                <option key={index}>{cur}</option>
                            ))}
                        </select>

                        <select
                            name="to"
                            onChange={(event) => this.selectHandler(event)}
                            value={this.state.toCurrency} readOnly={this.state.readOnly}>

                            {this.state.currencies.map((cur, index) => (
                                <option key={index}>{cur}</option>
                            ))}
                        </select>
                    </div>
                    {this.state.toCurrency} = {this.currencyFormat(this.state.result)}
                </h2>
            </div>
        );
    }
}

// export default Converter;
