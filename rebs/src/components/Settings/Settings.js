import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotificationList from '../Notifications/NotificationList';


class Settings extends Component {
  
  state = {
    user: null,
  }
    componentDidMount(){
        this.props.updateHeaderTitle("Settings");
        fetch(`${process.env.REACT_APP_API_URI}/users`)
        .then(res => res.json())
        .then(user => {
          this.setState({
            user
          })
        })
      }
    
    
   
    
  render() {
    const user = this.state.user
    const notifications = this.props.notifications
    return (
        <div className="settings">
          <div className="notifications">
            <h3 className="notifcationButton">Recent Notifications</h3>
              <NotificationList notifications={this.props.notifications}/>                      {/* TODO:Change to specific user */}
             <button>View Notifications</button>      {/* TODO: Add links to components*/}
          </div>
          <div className="contactDetails">
            <h3>Contact Details</h3>
              
              <button className="detailsButton">Edit</button>
          </div>
          <button className="settingsbuttons">View Workshops</button>        {/* TODO: Add links to components*/}
          <button className="settingsbuttons">View Facilitators</button>     {/* TODO: Add links to components*/} 
          <button className="logoutButton">Logout</button>                {/* TODO: Add links to components*/} 
       </div>
    );
  }
}

export default Settings;