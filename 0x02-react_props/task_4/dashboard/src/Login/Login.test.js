import React from 'react'
import { shallow } from 'enzyme'
import Login from './Login'

describe('Renders <Login /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />)
  })

  it("Renders Login without crashing", () => {
    expect(wrapper).toBeDefined();
  })

  it("Login component renders 2 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(2)
  })

  it("Login component renders 2 label input tags", () => {
    expect(wrapper.find("label")).toHaveLength(2)
  })
});
