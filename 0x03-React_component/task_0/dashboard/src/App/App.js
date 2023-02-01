import './App.css';
import React from 'react'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login';
import Footer from '../Footer/Footer'
import { getLatestNotification } from '../utils/utils';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types'


class App extends React.Component {
  
  constructor(props){
    super(props);
  }

  static listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
  ];

  static listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];
  render(){
    return (
      <React.Fragment>
        < Notifications listNotifications={this.listNotifications} />
        <div className="App">
          < Header />
            { this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login /> }
          < Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;
