import React, { Component } from 'react';
import './EventEdit.css';
import axios from 'axios';
// import EventView from 'react';
import { Redirect } from 'react-router-dom';


class EventEdit extends Component {

  state = {
    redirect: false,
  }

  handleChange = (e) => {
    const workshop_id = this.props.location.state.singleEvent._id
  const url = `https://webs-backend-vcqfjyghlo.now.sh/events/${workshop_id}`
    axios.patch(url, {
      _id: workshop_id,
    title: e.target.title.value,
    facilitators:  e.target.facilitators.value,
    })
    .then(() => {
      this.setState({redirect: true})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  
  render() {
    const singleEvent = this.props.location.state.singleEvent
    const redirect = this.state.redirect

    if(redirect){

      return <Redirect to={{
        pathname: `/events`,
        state: { singleEvent: singleEvent }
      }}/>
    }
    return (
      <div className="eventEdit">
        <h1>Edit Workshop</h1>
          <form onSubmit={(e) =>{
            e.preventDefault()
            this.handleChange(e)
          }}>
            <div>
            <input type="text" placeholder="Workshop Title" defaultValue={singleEvent.title} name="title" /><br/>
            </div>
          <div id="wrapper" >
          <input type="text" placeholder="Facilitators" defaultValue={singleEvent.facilitators} name="facilitators" />
          {/* Below code for V1.1 - when we have an array of facilitators */}
          {/* {singleEvent.facilitators.map(facilitator => {
            <input key={facilitator._id} type="text" defaultValue={facilitator} name="facilitators" />
          })} */}
          </div>

            <div className="">
              <input type="button" value="Add Facilitator" name="Add Facilitator" onClick={this.addFacilitator}/><br />  
            </div>
              
              <div className="onsite">
                <input type="checkbox" name="onsite"  />
                <p>Onsite</p>
              </div>

            <input type="text" placeholder="Organisation" defaultValue={singleEvent.organisation} name="organisation" /><br/>
            <input type="text" placeholder="Notes" defaultValue={singleEvent.notes} name="Notes" /><br />

            <div className="dates">
            {singleEvent.bookings.map((booking, i) => {
              return <div key={booking._id} className="singleBooking"><h4>Booking {i+1}</h4>
              <label>Start Date</label>
              <input type="datetime-local" defaultValue={booking.start} name="startDate" /> 
              <label>End Date</label>       
              <input type="datetime-local" defaultValue={booking.end} name="endDate" />
              <input type="text" defaultValue={booking.location} name="location" /><br/>
              </div>
            })}             
            </div>
            <button value="Add Another Date" name="addEvent">Add Another Date</button>

              
          <p>Attendees: </p>
          <input type="number" placeholder="0" defaultValue={singleEvent.attendees}/> <br />

          <select name="status" defaultValue={singleEvent.status} >
            <option value="confirmed">Confirmed</option>
            <option value="pending" >Pending</option>
            <option value="cancelled">Cancelled</option>
          </select><br/>

          <button value="submit">Submit</button>
          
          </form>

      </div>
    )
  }
}

export default EventEdit