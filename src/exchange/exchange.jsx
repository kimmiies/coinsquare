import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccountBalance from '../accountBalance/accountBalance'
import { buy, sell } from '../store/actions'
import axios from 'axios'
import './exchange.css';

export class Exchange extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      saleCurrency: 'usd',
      buyCurrency: 'btc',
      usdQuote: '',
      buyPrice: null,
      btcQuote: null,
      error: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.getQuote = this.getQuote.bind(this)
    this.getLastPrice = this.getLastPrice.bind(this)
    this.trade = this.trade.bind(this)
  }

  getLastPrice() {
    return axios.get('https://api.bitfinex.com/v1/pubticker/btcusd')
    .then((response) => {
      this.setState({ buyPrice: response.data.last_price })
    })
    .catch(err => console.log('err', err))
  }

  trade(event) {
    event.preventDefault()
    const { usdQuote, saleCurrency, buyCurrency, btcQuote } = this.state

    this.props.sell(saleCurrency, usdQuote)
    this.props.buy(buyCurrency, btcQuote)
  }

  getQuote() {
    if (this.state.usdQuote <= this.props.usd) {
      this.getLastPrice().then(() => {
        const quote = (this.state.usdQuote / this.state.buyPrice).toFixed(3)

        this.setState({ btcQuote: parseFloat(quote) })
      })
      .catch(err => console.log('err', err))
    } else {
      this.setState({ error: "You have exceeded your available funds"})
    }
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { saleCurrency, buyCurrency, btcQuote, usdQuote, error} = this.state
    const { usd, btc } = this.props

    return (
      <div className="exchange">
        <AccountBalance usd={usd} btc={btc} />

        <form className='trade-form'>
          <h5 className='trade-form__label'>Trade</h5>
          <p className='trade-form__input trade-form__input--bold'>{saleCurrency}</p>

          <input type="number"
            name="usdQuote"
            onBlur={this.getQuote}
            value={usdQuote}
            onChange={this.handleChange}
            placeholder="Enter your amount"
            className='trade-form__input'
            autoFocus
            required/>
          { error && <p className="error">{error}</p>}

          <h5 className='trade-form__label'>For</h5>
          <p className='trade-form__input trade-form__input--bold'>{buyCurrency}</p>

          { btcQuote
            ? <p className='trade-form__input'>{btcQuote}</p>
            : <p className='trade-form__input'>Display Quote</p>
          }

          <button onClick={this.trade} className='trade-form__submit-btn'>Trade </button>
        </form>
      </div>
    );
  }
}

Exchange.propTypes = {
  usd: PropTypes.number.isRequired,
  btc: PropTypes.number.isRequired,
  buy: PropTypes.func.isRequired,
  sell: PropTypes.func.isRequired,
}

const mapStateToProps = ({ userReducer }) => {
  return {
    usd: userReducer.usd,
    btc: userReducer.btc,
  }
}

const mapDispatchToProps = { buy, sell }

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)
