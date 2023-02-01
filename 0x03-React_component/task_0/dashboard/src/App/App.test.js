import { shallow } from 'enzyme';
import App from './App';
import React from 'react'

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  it('App without crashing', (done) => {
    expect(wrapper.exists());
  });

  it('App has <Header /> component', () => {
    expect(wrapper.find("Header").toHaveLength(1))
  });

  it('App has <Login /> component', () => {
    expect(wrapper.find('Login').toHaveLength(1))
  });

  it('App has </Footer > component', () => {
    expect(wrapper.find("Footer").toHaveLength(1))
  });

  it("Apps has </Notifications /> component", () => {
    expect(wrapper.find('Notifications').toHaveLength(1))
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true}/>);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it(" the CourseList component is included", () => {
    expect(wrapper.find('CourseList').exists());
  });
});
