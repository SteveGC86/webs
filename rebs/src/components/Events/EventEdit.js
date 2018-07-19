import React, { Component } from 'react';
import './EventEdit.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DateTimePicker from 'material-ui-pickers/DateTimePicker';



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
          multi
          joinValues
          delimiter={','}
          name="facilitators"
          value={selectedOption}
          onChange={this.facilitatorSelect}
          required
          options={[
            { value: '09348509342780543209', label: 'Teacher 1' },
            { value: '4385794832759823', label: 'Teacher 2' },
            { value: '4325984239058', label: 'Teacher 3' },
            { value: '4320958094526754', label: 'Teacher 4' },
            { value: '34205984309275234', label: 'Teacher 5' },
            { value: '5342095840923850943', label: 'Teacher 6' },
          ]}
        />
              
              
              
              <div className="onsite" >
                <input type="checkbox" className="onsiteConfirm" defaultValue={singleEvent.onsite} name="onsite" required/>
                <p>Onsite</p>
              </div>

            <input type="text" ref={this.organistation} placeholder="Organisation" defaultValue={singleEvent.organisation} name="organisation" /><br/>
            <input type="text"  ref={this.notes} placeholder="Notes" defaultValue={singleEvent.notes} name="notes" required/><br />

            <div className="dates">
            {singleEvent.bookings.map((booking, i) => {
              return <div key={booking._id} className="singleBooking"><h4>Booking {i+1}</h4>
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