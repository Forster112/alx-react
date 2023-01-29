import { shallow } from 'enzyme'
import Header from './Header'
import React from 'react'

describe('testing <Header /> components', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("Renders without crashing", ()=>{
    expect(wrapper).toBeDefined();
  })

  it("Renders find h1", () => {
    expect(wrapper.find('h1')).toBeDefined()
  })

  it("Renders find image", () => {
    expect(wrapper.find('img')).toBeDefined()
  })
});

