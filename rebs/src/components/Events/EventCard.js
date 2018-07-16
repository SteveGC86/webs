import React from 'react'
import moment from 'moment'
import './EventCard.css'

class EventCard extends React.Component {

  render() {
    const singleEvent = this.props.singleEvent
    return(
    <div key={singleEvent._id} className="eventCard" >
      <div className="eventDetails">
        <h2>{singleEvent.title}</h2>
        <h5>{singleEvent.facilitators}</h5>
          {singleEvent.bookings.map(booking => {
            return <p> 
              {moment(booking.start).format("dddd, MMMM Do YYYY")}
            </p>
            })}
          
      </div>

      <div className="confirmation">
        <p>{singleEvent.status}</p>
        <input type="button" value="View" name="viewEvent" />
      </div>
    </div>
    )}
}

export default EventCard