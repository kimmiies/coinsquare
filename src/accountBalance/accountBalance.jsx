import React from 'react';
import PropTypes from 'prop-types';

const AccountBalance = ({ usd, btc }) => (
  <div className="account-balance">
    <p className="account-balance__label">Account Balance</p>
    <p className="account-balance__currency">USD
      <span className="account-balance__amount">{usd}</span>
    </p>
    <p className="account-balance__currency">BTC
      <span className="account-balance__amount">{btc}</span>
    </p>
  </div>
);

AccountBalance.propTypes = {
  usd: PropTypes.number.isRequired,
  btc: PropTypes.number.isRequired,
}

export default AccountBalance;
