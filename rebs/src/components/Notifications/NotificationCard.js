import React from 'react'
import { Link } from 'react-router-dom';

class NotificationCard extends React.Component {

  render(){
    const singleNotification = this.props.singleNotification
    return(
      <div key ={singleNotification._id} className="eventCard">
        <div className="eventName">
          <h3>{singleNotification._id}</h3>
          </div>
          <div className="eventDetails">
            <p>{singleNotification.message}</p>
          </div>
      </div>
    )
  } 

}

export default NotificationCard