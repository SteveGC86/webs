import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import ShowCalendar from '../Calendar/ShowCalendar'


class EventView extends Component {
  
  render(){
    const singleEvent = this.props.location.state.singleEvent
    console.log(singleEvent)
    return (
      <div className="eventView">
        <h2>{singleEvent.title}</h2>
        <p>Status: {singleEvent.status ? singleEvent.status : "Pending"}</p>
        <Link to={{
          pathname: `/events/${singleEvent._id}/edit`,
          state: { singleEvent }
        }}>
          <button className="edit-button">Edit</button>
        </Link>

        <div className="wrapper">
          <h3>Dates:</h3>
          <div className="dates">
            <ul>
              {singleEvent.bookings.map(booking => {
                return <li key={booking._id}><p>{moment(booking.start).format('ddd D/MM/YY')} {moment(booking.start).format('h:mm a')} <b> to </b>{moment(booking.end).format('ddd D/MM/YY')}  {moment(booking.end).format('h:mm a ')}<br/>
                {booking.location} </p></li>
              })}
            </ul><br/>
          </div>
        </div>
        <div className="wrapper">
          <h3>Facilitators:</h3>
          <p>{singleEvent.facilitators}</p><br/>
        </div>
        <div className="wrapper">
          <h3>Location ({singleEvent.onsite ? "Onsite" : "Offsite"}):</h3>
          <p>{singleEvent.bookings[0].location}</p><br/>
        </div>
        <div className="wrapper">
          <h3>Organisation:</h3>
          <p>{singleEvent.organisation}</p>
          </div>
      <Link to={'/events'}><button>Back</button></Link>
      </div>
    )
  }
}

export default EventView