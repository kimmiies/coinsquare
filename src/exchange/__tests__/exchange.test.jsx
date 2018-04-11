import React from 'react';
import { shallow, configure } from 'enzyme';
import { Exchange } from '../exchange.jsx';
import AccountBalance from '../../accountBalance/accountBalance'

/* TO DO: Add to testConfigs */
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
/* ------------------------- */

describe('<Exchange />', () => {
  let exchange
  let props

  beforeEach(() => {
    props = {
      usd: 100,
      btc: 10,
      buy: jest.fn(),
      sell: jest.fn(),
    }
    exchange = shallow(<Exchange {...props}/>);
  });

  it('should render an <AccountBalance />', () => {
    expect(exchange.find(AccountBalance)).toHaveLength(1);
  });

  it('should display an error if the user is trying to buy amount exceeds account balance', () => {
    exchange.setState({ usdQuote: 120 })
    exchange.instance().getQuote()

    exchange.update()

    expect(exchange.find('.error')).toHaveLength(1);
  });

  it('should make a trade when user clicks trade button', () => {
    const tradeBtn = exchange.find('.trade-form__submit-btn')
    const event = { preventDefault: () => {}}

    tradeBtn.simulate('click', event);

    expect(props.buy).toHaveBeenCalled();
    expect(props.sell).toHaveBeenCalled();
  });
});
