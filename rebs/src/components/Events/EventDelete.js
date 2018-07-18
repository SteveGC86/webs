import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

class EventDelete extends Component {

    state = {
        redirect: false,
    }

    deleteEvent(event_id){
        const url = `https://webs-backend-dev.now.sh/events/${event_id}`
        axios.delete(url)
        .then(()=>{
            this.setState({ redirect: true})
        })
    }
  
  render(){
    const singleEvent = this.props.location.state.singleEvent
    console.log(singleEvent)

    if(this.state.redirect){
        return <Redirect to={`/events`}/>
    }
    return (
      <div className="eventDelete">
      <h3>
          Are you sure you want to delete the below event?
      </h3>
      
          <button className="delete-button" onClick={this.deleteEvent(singleEvent._id)}>Delete Event</button>
          
        <Link to={{
          pathname: `/events/${singleEvent._id}`,
          state: { singleEvent }
        }}>
          <button className="edit-button">Cancel</button>
        </Link>


        <h2>{singleEvent._id}</h2>
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
      </div>
    )
  }
}

export default EventDelete