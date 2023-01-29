import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Renders <Footer /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it("Renders Footer without crashing", () => {
    expect(wrapper).toBeDefined()
  })

  it("Footer contains Copyright", () => {
    expect(wrapper.find('p')).contains('Copyright');
  })
});
