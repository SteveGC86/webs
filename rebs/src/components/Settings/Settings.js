import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Settings extends Component {

    componentDidMount(){
        this.props.updateHeaderTitle("Settings");
    }

  render() {

    return (
        <div className="settings">
          <div className="notifications">
            <h3>Recent Notifications</h3>
              <button>View Notifications</button>       {/* TODO: Add links to components*/}
          </div>
          <div className="contactDetails">
            <h3>Contact Details</h3>
            <button>Edit</button>
          </div>
            <button>View Workshops</button>         {/* TODO: Add links to components*/}
            <button>View Facilitators</button>      {/* TODO: Add links to components*/} 
            <button>Logout</button>                 {/* TODO: Add links to components*/} 
       </div>
    );
  }
}

export default Settings;