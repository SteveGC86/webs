import React, { Component } from 'react';
import './EventEdit.css';
import axios from 'axios';
// import EventView from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import 'react-select/dist/react-select.css'


class EventEdit extends Component {
  
  state = {
    redirect: false,
    selectOption: [],
    selectedDate: new Date(),
  }
  

  removeFacilitator = () => {
    this.setState((prevState, props) => {
      facilitator: prevState.facilitator -- 
      console.log(this.state.facilitator);
    })}
   
  handleChange = (e) => {
    const workshop_id = this.props.location.state.singleEvent._id
  const url = `https://webs-backend-vcqfjyghlo.now.sh/events/${workshop_id}`
    axios.patch(url, {
      _id: workshop_id,
    title: e.target.title.value,
    organisation: e.target.organisation.value,
    notes: e.target.notes.value,
    facilitators:  this.state.selectedOption,
    attendees: e.target.attendees.value,
    onsite: e.target.onsite.checked,
    status: e.target.status.value
   
    })
    .then((res) => {
      console.log(res.data);
      this.setState({redirect: true})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  facilitatorOption = (selectedOption) =>{
    this.setState({ selectedOption });
    if(selectedOption) {
      selectedOption.map(option => {
        this.setState({selectedOption})
        console.log(option.value)
      })
    }
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }
    
    render() {
      const singleEvent = this.props.location.state.singleEvent
      const redirect = this.state.redirect
      const { selectedOption } = this.state;
      const { selectedDate } = this.state;

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
            console.log(this.input);
          }}>
            <div>
            <input type="text"  placeholder="Workshop Title" defaultValue={singleEvent.title} name="title" required/><br/>
            </div>

                  <Select
                      name="facilitators"
                      value={selectedOption}
                      onChange={this.facilitatorOption}
                      multi={true}
                      joinValues={true}
                      delimiter={','} 
                      options={[
                        { value: "Ruegen aschenburger", label: "Ruegen" },
                        { value: "Matt BigMackenzie", label: "Matt" },
                        { value: "gretcher scott", label: "Gretch" }
                      ]}
                  />          
              
              
              <div className="onsite" >
                <input type="checkbox" defaultValue={singleEvent.onsite} name="onsite" required/>
                <p>Onsite</p>
              </div>

            <input type="text" ref={this.organistation} placeholder="Organisation" defaultValue={singleEvent.organisation} name="organisation" /><br/>
            <input type="text"  ref={this.notes} placeholder="Notes" defaultValue={singleEvent.notes} name="notes" required/><br />

            <div className="dates">
            {singleEvent.bookings.map((booking, i) => {
              return <div key={booking._id} className="singleBooking"><h4>Booking {i+1}</h4>
              <label>Start Date</label>
              <DateTimePicker
                value={selectedDate}
                name="startDate"
                placeholder="Start Date"
                onChange={this.handleDateChange}
                required 
              />
              
              <label>End Date</label>
              <DateTimePicker
                value={selectedDate}
                name="endDate"
                placeholder="End Date"
                onChange={this.handleDateChange}
                required
              />       
            
              <input type="text" ref={this.location} defaultValue={booking.location} name="location" required/><br/>
              </div>
            })}             
            </div>
            <button value="Add Another Date" name="addEvent">Add Another Date</button>

              
          <p>Attendees: </p>
          <input type="number" placeholder="0" defaultValue={singleEvent.attendees} name="attendees" required/> <br />

          <select name="status" defaultValue={singleEvent.status} name="status">
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