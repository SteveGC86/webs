import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

class NotificationCard extends React.Component {

  render(){
    const singleNotification = this.props.singleNotification
    return(
      <div key ={singleNotification._id} className="eventCard">
        <div className="eventName">
          <p>{singleNotification.message}</p>
          </div>
          <div className="eventDetails">
            <p>{moment(singleNotification.date).format("ddd Do MMM YYYY")}</p>
          </div>
      </div>
    )
  } 

}

export default NotificationCard

