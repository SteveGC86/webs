import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ShowCalendar from '../Calendar/ShowCalendar'

class EventView extends Component {
  
  render(){
    const singleEvent = this.props.location.state.singleEvent
    console.log(singleEvent)
    return (
      <div className="eventView">
      <ShowCalendar/>
        <h2>{singleEvent.title}</h2>
        <p>{singleEvent.status}</p>
        
        <div className="dates">
          <h3>Dates:</h3>
            <ul>
              {singleEvent.bookings.map(booking => {
                return <li key={booking._id}><b>{moment(booking.start).format('ddd D/MM/YY')}:</b> {moment(booking.start).format('h:mm a')} - {moment(booking.end).format('h:mm a')}<br/>
                {booking.location}</li>
              })}
            </ul><br/>
          <h3>Facilitators:</h3>
          <h4>{singleEvent.facilitators}</h4><br/>
          <h3>Location - {singleEvent.onsite ? "Onsite" : "Offsite"}</h3>
          <p>{singleEvent.bookings[0].location}</p><br/>
          <h3>Organisation:</h3>
          <p>{singleEvent.organisation}</p>
        </div>
        <Link to={{
          pathname: `/events/${singleEvent._id}/edit`,
          state: { singleEvent }
        }}>
          <button className="edit-button">Edit</button>
        </Link> <Link to={{
          pathname: `/events/${singleEvent._id}/delete`,
          state: { singleEvent }
        }}>
          <button className="delete-button">Delete</button>
        </Link>
      <Link to={'/events'}><button>Back</button></Link>
      </div>
    )
  }
}

export default EventView