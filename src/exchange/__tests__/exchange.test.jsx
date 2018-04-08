import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Exchange from '../exchange.jsx';

/* TO DO: Add to testConfigs */
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
/* ------------------------- */

describe('<Exchange />', () => {
  it('renders exchange container', () => {
    const wrapper = shallow(<Exchange />);
    expect(wrapper.find('.exchange')).toHaveLength(1);
  });
});
