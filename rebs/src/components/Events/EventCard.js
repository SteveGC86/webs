import React from 'react';
import moment from 'moment';
import './EventCard.css';
import {Link} from 'react-router-dom';

class EventCard extends React.Component {

  render() {
    const singleEvent = this.props.singleEvent
    return(
    <div key={singleEvent._id} className="eventCard" >
      <div className="eventDetails">
        <h3>{singleEvent.title}</h3>
        <h5>{singleEvent.facilitators}</h5>
          {singleEvent.bookings.map(booking => {
            return <p key={booking._id}> 
              {moment(booking.start).format("dddd, MMMM Do YYYY")}
            </p>
            })}
          
      </div>

      <div className="confirmation">
        <p>{singleEvent.status}</p>

        <Link key={singleEvent._id} 
          to={
              {
                  pathname: `/events/${singleEvent._id}/`,
                  state: { singleEvent }
              }
          }> 
            <button className="viewButton" name="viewEvent">View</button>
        </Link>

      </div>
    </div>
    )}
}

export default EventCard
