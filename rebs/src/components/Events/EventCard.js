import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

class EventCard extends React.Component {

  render() {
    const singleEvent = this.props.singleEvent
    return(
      
    <div key={singleEvent._id} className="eventCard" >
      <div className="eventName">
        <h3>{singleEvent.title[0].id.workshop_name}</h3>
      </div>

      <div className="eventDetails">
        <div>
          {singleEvent.facilitatorObjs.map(facil => {
            return <h5 key={facil._id}>{facil.id.f_name} {facil.id.l_name}</h5>
          })}
          {singleEvent.bookings.map(booking => {
            return <p key={booking._id}> 
              {moment(booking.start).format("ddd Do MMM YYYY")}<br/>
              {booking.location}
            </p>
            })}
        </div>
        </div>

        <div className="eventDetails">
          <div>
            <h5>{singleEvent.facilitators}</h5>
                {singleEvent.bookings.map(booking => {
                  return <p key={booking._id}> 
                    {moment(booking.start).format("ddd Do MMM YYYY")}<br/>
                    {booking.location}
                  </p>
                  })}
          </div>
          <div>
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
      </div>
    )}
}

export default EventCard
