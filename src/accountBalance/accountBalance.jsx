import React from 'react';
import PropTypes from 'prop-types';

const AccountBalance = ({ usdBalance, btcBalance }) => (
  <div className="account-balance">
    <p className="account-balance__label">Account Balance</p>
    <p className="account-balance__currency">USD
      <span className="account-balance__amount">{usdBalance}</span>
    </p>
    <p className="account-balance__currency">BTC
      <span className="account-balance__amount">{btcBalance}</span>
    </p>
  </div>
);

AccountBalance.propTypes = {
  usdBalance: PropTypes.number.isRequired,
  btcBalance: PropTypes.number.isRequired,
}



export default AccountBalance;
