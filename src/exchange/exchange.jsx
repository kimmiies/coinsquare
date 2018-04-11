import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import AccountBalance from '../accountBalance/accountBalance'
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


  render() {
    const { usdBalance, coinBalance, btcBalance } = this.state
    return (
      <div className="exchange">
        <AccountBalance usdBalance={usdBalance} btcBalance={btcBalance} />

        <form className='trade-form'>
          <h5 className='trade-form__label'>Trade</h5>
          <p className='trade-form__input trade-form__input--bold'>{this.state.saleCurrency}</p>

          <input type="text"
            name="salePrice"
            onBlur={this.handleBlur}
            value={this.state.salePrice}
            onChange={this.handleChange}
            placeholder="Enter your amount"
            className='trade-form__input'
            autoFocus
            required/>

          <h5 className='trade-form__label'>For</h5>
          <p className='trade-form__input trade-form__input--bold'>{this.state.buyCurrency}</p>

          { coinBalance
            ? <p className='trade-form__input'>{coinBalance}</p>
            : <p className='trade-form__input'>Display Quote</p>
          }

          <button onClick={this.trade} className='trade-form__submit-btn'>Trade </button>
        </form>
      </div>
    );
  }
}


export default Exchange;
