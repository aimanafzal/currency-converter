import React, { Component } from 'react';
import Converter from './Converter';

class App extends Component {
  render() {
    return (
      <div id="currencyConverterApp">
        <section className="currencyConvComponent">
            <Converter/>
        </section>
        <div className="backlinkFooter">
          <a href="https://github.com/NicholasKyleHoffman/currency-coverter">View the Currency Coverter on GitHub</a>
        </div>
      </div>

    );
  }
}

export default App;