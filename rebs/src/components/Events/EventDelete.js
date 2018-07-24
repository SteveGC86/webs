import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

class EventDelete extends Component {

    state = {
        redirect: false,
    }

    deleteEvent(event){
        const url = `${process.env.REACT_APP_API_URI}/events/${event._id}`
        axios.delete(url)
        .then(()=>{
            this.setState({ redirect: true})
        })
    }

    cancel(){
      this.setState({redirect: true})
  }
  
  render(){
    const singleEvent = this.props.location.state.singleEvent

    if(this.state.redirect){
        return <Redirect to={`/events`}/>
    }
    return (
      <div className="eventDelete">
      <h3>
          Are you sure you want to delete this event?
      </h3><br/>
      
          <button className="delete-button" onClick={() => {this.deleteEvent(singleEvent)}}>Delete Event</button>
        
          <button className="edit-button" onClick={() => {this.cancel()}}>Cancel</button>
      <br/><br/>
        <h3>{singleEvent.title}</h3>
        <p>Status: {singleEvent.status}</p>
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
    )
  }
}

export default EventDelete