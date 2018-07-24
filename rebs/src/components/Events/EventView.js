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
        <h2>{singleEvent.title[0].id.workshop_name}</h2>
        <h3><br/>Status: {singleEvent.status ? singleEvent.status : "Pending"}</h3><br/>

        <div className="wrapper">
          <h3>Dates:</h3>
          <div className="dates">
            <ul>
              {singleEvent.bookings.map(booking => {
                return <li key={booking._id}><p>{moment(booking.start).format('ddd D/MM/YY')} {moment(booking.start).format('h:mm a')} <br/>to<br/>{moment(booking.end).format('ddd D/MM/YY')}  {moment(booking.end).format('h:mm a ')}</p></li>
              })}
            </ul><br/>
          </div>
        </div>
        <div className="wrapper">
          <h3>Facilitators:</h3>
          {singleEvent.facilitatorObjs.map(facil => {
            return <p key={facil._id}>{facil.id.f_name} {facil.id.l_name} - {facil.id.role}</p>
          })}<br/>
        </div>
        <div className="wrapper">
          <h3>Location ({singleEvent.onsite ? "Onsite" : "Offsite"}):</h3>
          <p>{singleEvent.bookings[0].location}</p><br/>
        </div>
        <div className="wrapper">
          <h3>Organisation:</h3>
          <p>{singleEvent.organisation.id.org_name}<br/></p>

          </div>

          <Link to={{
          pathname: `/events/${singleEvent._id}/edit`,
          state: { singleEvent }
        }}>
          <button className="edit-button">Edit</button>
        </Link>
        <Link to={{
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