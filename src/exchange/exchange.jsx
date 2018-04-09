import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios'
import './exchange.css';

class Exchange extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      usdBalance: 157,
      btcBalance: 0,
      saleCurrency: 'usd',
      salePrice: '',
      buyCurrency: 'btc',
      buyPrice: null,
      coinBalance: null,
      error: null,
    }

    this.getPrice = this.getPrice.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.trade = this.trade.bind(this)
  }

  getPrice() {
    return axios.get('https://api.bitfinex.com/v1/pubticker/btcusd')
    .then((response) => {
      this.setState({ buyPrice: response.data.last_price })
    })
  }

  trade(event) {
    event.preventDefault()

    const updatedUsdBalance = this.state.usdBalance - this.state.salePrice
    const updatedCtcBalance = this.state.btcBalance + this.state.coinBalance

    this.setState({
      usdBalance: updatedUsdBalance,
      btcBalance: updatedCtcBalance
    })
  }

  handleBlur() {
    if (this.state.salePrice <= this.state.usdBalance) {
      this.getPrice().then(() => {
        const quote = (this.state.salePrice / this.state.buyPrice).toFixed(3)

        this.setState({ coinBalance: quote })
      })
    } else {
      this.setState({ error: "have entered an amount greater than your balance"})
    }
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value })
  }

  //Failed to load https://api.bitfinex.com/v1/pubticker/btcusd: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access.

  render() {
    const { usdBalance, coinBalance, btcBalance } = this.state
    return (
      <div className="exchange">
        <div className="account-balance">
          <h1 className="account-balance__label">Account Balance</h1>
          <p>{`USD $${usdBalance}`}</p>
          <p>{`BTC $${btcBalance}`}</p>
        </div>

        <form>
          <h5>Select Your Currency:</h5>
          <p>{this.state.saleCurrency}</p>

          <label>Select amount to trade:
            <input type="text"
              name="salePrice"
              onBlur={this.handleBlur}
              value={this.state.salePrice}
              onChange={this.handleChange}
              placeholder="Enter amount here"
              className=""
              autoFocus
              required/>
          </label>

          <h5>Select What you'd like to buy:</h5>
          <p>{this.state.buyCurrency}</p>

          <div>Your amount: {coinBalance}</div>

          <button onClick={this.trade}>Trade </button>
        </form>
      </div>
    );
  }
}


export default Exchange;
