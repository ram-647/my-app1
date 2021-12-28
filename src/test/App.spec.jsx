import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Test App component', () => {

  it('renders learn react link', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('nav').exists()).toBe(true);
  });
})

