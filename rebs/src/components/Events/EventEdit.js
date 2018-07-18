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
    selectedDate: new Date(),
  }
  // constructor(props) {
  //   super(props)
  // }

  // addWorkshop(workshop, facilitator) {
  //   this.props.addWorkshop(workshop, facilitator)
  // }

  // removeWorkshop(workshop, facilitator) {
  //   this.props.removeWorkshop(workshop, facilitator)
  // // }
    
    // const facilitator = document.getElementById('wrapper').innerHTML += '<br/> <input type="text" placeholder=" Facilitator"name="facilitator" />'
    // // console.log(facilitator);
    // {console.log(document.getElementById('wrapper'))}
    // // {console.log(document.getElementById('wrapper').input)}
    // const nodes = document.querySelectorAll("input[name='facilitator']")
    // console.log(nodes)

  // removeFacilitator = () => {
  //   this.setState((prevState, props) => {
  //     facilitator: prevState.facilitator -- 
  //     console.log(this.state.facilitator);
  //   })}
    // const nodes = document.querySelectorAll("input[name='facilitator']")
    // const remove = [].slice.call(nodes).pop()
    // nodes.removeChild(  )
    // var arr = Array.prototype.slice.call(nodes)
    // console.log(arr)
    // console.log(nodes);
    //  -= '<br/> <input type="text" placeholder= "Facilitator"  name="facilitator" />'
    // console.log(remove)
  handleChange = (e) => {
    const facilitators = this.state.selectedOption.map(facilitator => {
      return facilitator.label
    })
    const workshop_id = this.props.location.state.singleEvent._id
  const url = `https://webs-backend-vcqfjyghlo.now.sh/events/${workshop_id}`
    axios.patch(url, {
      _id: workshop_id,
    title: e.target.title.value,
    facilitators:  facilitators,
   
    })
    .then((res) => {
      this.setState({redirect: true})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  facilitatorSelect = (selectedOption) => {
    this.setState({ selectedOption });
    }
  

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  // const workshop = this.refs.workshop.value
  // const facilitator = this.refs.facilitator.value
  
  // if(!workshop || !facilitator) {
    //   return;
    // }
    
    
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
            <input type="text"  placeholder="Workshop Title" defaultValue={singleEvent.title} name="title" /><br/>
            </div>



          {/* <div id="wrapper" >
          <input type="text" placeholder="Facilitators" defaultValue={singleEvent.facilitators} name="facilitators" />
          {/* Below code for V1.1 - when we have an array of facilitators */}
          {/* {singleEvent.facilitators.map(facilitator => {
            <input key={facilitator._id} type="text" defaultValue={facilitator} name="facilitators" />
          })} */}
          {/* </div> */}

            {/*<div className="button">
              <input type="button" value="Add Facilitator" name="Add Facilitator" onClick={this.addFacilitator}/><br />
              {this.state.facilitator < 2 ? "" : <FacilitatorInput state={this.state.facilitator} />}
            </div>
                 */}

        <Select
          multi
          joinValues
          delimiter={','}
          name="facilitators"
          value={selectedOption}
          onChange={this.facilitatorSelect}
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
                <input type="checkbox" ref={this.onsite} name="onsite" />
                <p>Onsite</p>
              </div>

            <input type="text" ref={this.organistation} placeholder="Organisation" defaultValue={singleEvent.organisation} name="organisation" /><br/>
            <input type="text"  ref={this.notes} placeholder="Notes" defaultValue={singleEvent.notes} name="Notes" /><br />

            <div className="dates">
            {singleEvent.bookings.map((booking, i) => {
              return <div key={booking._id} className="singleBooking"><h4>Booking {i+1}</h4>
              <label>Start Date</label>
              <DateTimePicker
                value={selectedDate}
                name="startDate"
                placeholder="Start Date"
                onChange={this.handleDateChange}
              />
              {/* <input type="datetime-local" ref={this.startDate}  defaultValue={booking.start} name="startDate" />  */}
              <label>End Date</label>
              <DateTimePicker
                value={selectedDate}
                name="endDate"
                placeholder="End Date"
                onChange={this.handleDateChange}
              />       
              {/* <input type="datetime-local" ref={this.endDate} defaultValue={booking.end} name="endDate" /> */}
              <input type="text" ref={this.location} defaultValue={booking.location} name="location" /><br/>
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