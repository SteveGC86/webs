import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import styled from 'styled-components';



class EventEdit extends Component {
  
  state = {
    redirect: false,
    selectedOption: '',
    startDate: new Date(),
    endDate: new Date(),
  }
  


  handleChange = (e) => {
    const facilitators = this.state.selectedOption.map(facilitator => {
      return facilitator.label
    })
    const workshop_id = this.props.location.state.singleEvent._id
  const url = `https://webs-backend-dev.now.sh/events/${workshop_id}`
      axios.patch(url, {
        _id: workshop_id,
      title: e.target.title.value,
      organisation: e.target.organisation.value,
      notes: e.target.notes.value,
      facilitators:  this.state.selectedOption,
      attendees: e.target.attendees.value,
      onsite: e.target.onsite.checked,
      status: e.target.status.value,
      bookings: [{
        location: e.target.location.value,
        start: this.state.startDate,
        end: this.state.endDate
      }],
    
   
    })
    .then((res) => {
      console.log(res.data);
      this.setState({redirect: true})
    })
    .catch(function (error) {
      console.log(error);
    });
  }


      startDateChange = (date) => {
        this.setState({ startDate: date });
      }

    endDateChange = (date) => {
      this.setState({ endDate: date });
    }

    facilitatorSelect = (selectedOption) => {
      this.setState({ selectedOption });
      }

      componentDidMount(){
        const singleEvent = this.props.location.state.singleEvent
        this.setState({
          startDate: singleEvent.bookings[0].start,
          endDate: singleEvent.bookings[0].end,
        })
      }
      

    render() {
      const singleEvent = this.props.location.state.singleEvent
      const { startDate, endDate, redirect, selectedOption } = this.state;

      const MultiSelect = styled(Select)`
          &.Select--multi  {
            diplay: flex;
            align-content: center;
            width: 70vw;
            margin: 0 30vw 0 30vw;
            border: 1px solid #363637;
            border-radius: 3px;
          }` 

    if(redirect){

      return <Redirect to={{
        pathname: `/events`,
        state: { singleEvent: singleEvent }
      }}/>
    }
    return (
      <div className="eventEdit">
        <h2>Edit Workshop</h2>
          <form onSubmit={(e) =>{
            e.preventDefault()
            this.handleChange(e)
            console.log(this.input);
          }}>
            
              <input type="text"  placeholder="Workshop Title" defaultValue={singleEvent.title} name="title" required/><br/>
            
            
                  <Select
                    multi
                    joinValues
                    delimiter={','}
                    name="facilitators"
                    value={selectedOption}
                    onChange={this.facilitatorSelect}
                    required
                    options={[
                      { value: 'userID1', label: 'Amos Jon Wilksch' },
                      { value: 'userID2', label: 'Annabelle (Bella) Maguire' },
                      { value: 'userID3', label: 'Andrew Madden' },
                      { value: 'userID4', label: 'Arian Yusef' },
                      { value: 'userID5', label: 'Billy' },
                      { value: 'userID6', label: 'Bushra Malik' },
                      { value: 'userID7', label: 'Camilla Stadlinger' },
                      { value: 'userID8', label: 'Christian Saviane' },
                      { value: 'userID9', label: 'Jacqueline tate ' },
                      { value: 'userID10', label: 'Kelsey Birrel' },
                      { value: 'userID11', label: 'Lani Gambino' },
                      { value: 'userID12', label: 'Marc Pestamento' },
                      { value: 'userID13', label: 'Najat Smeda' },
                      { value: 'userID14', label: 'Pauline' },
                      { value: 'userID15', label: 'Robert Wellington' },
                      { value: 'userID16', label: 'Simon Dwyer' },
                      { value: 'userID17', label: 'Sophie' },
                      { value: 'userID18', label: 'Steve Christenson' },
                      { value: 'userID19', label: 'Suzanne Thomson' },
                      { value: 'userID20', label: 'Tyson Butler-Boschma' },
                      { value: 'userID21', label: 'Teresa Fae' },
                    ]}
                  />
             
              
              
            <div className="onsite" >
              <p>Onsite</p>
              <input type="checkbox" defaultValue={singleEvent.onsite} name="onsite" required/>
            </div>

            <input type="text" ref={this.organistation} placeholder="Organisation" defaultValue={singleEvent.organisation}      name="organisation" /><br/>
            <input type="text"  ref={this.notes} placeholder="Notes" defaultValue={singleEvent.notes} name="notes" required/><br />

            <div className="dates">
              {singleEvent.bookings.map((booking, i) => {
                return <div key={booking._id} className="singleBooking"><h4>Booking {i+1}</h4>
              
              <div className="datesAlign">
                <p>Start Time: <br/></p>
                  <DateTimePicker
                    value={startDate}
                    onChange={this.startDateChange}
                  />

                  <p>End Time:<br/></p>
                  <DateTimePicker
                    value={endDate}
                    onChange={this.endDateChange}
                  />  
              </div>  
              
                <input type="text" ref={this.location} defaultValue={booking.location} name="location" required/><br/>
            </div>
              })}             
            </div>
            {/* <button value="Add Another Date" name="addEvent">Add Another Date</button> */}

              
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