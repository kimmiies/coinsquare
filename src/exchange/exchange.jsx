import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './exchange.css';

class Exchange extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      usdBalance: '100',
      coinBalance: null,
    }
  }

  render() {
    const { usdBalance, coinBalance } = this.state
    const { testProps } = this.props
    return (
      <div className="exchange">
        <div className="account-balance">
          <h1 className="account-balance__label">Account Balance</h1>
          <p>{`USD $${usdBalance}`}</p>
          <p>{`COIN $${coinBalance}`}</p>
          <p>{testProps}</p>
        </div>
      </div>
    );
  }
}

Exchange.propTypes = {
  testProps: PropTypes.string,
}

export default Exchange;
