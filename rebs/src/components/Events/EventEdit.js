import React, { Component } from 'react'
import Header from '../Header/Header'
import './EventEdit.css'


class EventEdit extends Component {

  componentDidMount(){
    this.props.updateHeaderTitle("Edit Event");
  }

  handleChange = (e) => {
  const url = 'https://webs-backend-kpbyniydyc.now.sh/events/{this.props.work}' 
  const data = {
    workshop: e.target.workshop.value,
    facilitator:  e.target.facilitator.value,
    }
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'applications/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
  }
  addFacilitator = (e) => {
    const facilitator = document.getElementById('wrapper').innerHTML += '<br/> <input type="text" placeholder=" facilitator" name="facilitator" />'
  }

  
  render() {
    return (
      <div className="eventEdit">
        <h1>Edit Workshop</h1>
          <form onSubmit={(e) =>{
            e.preventDefault()
          }}>
            <input type="text" placeholder="   workshop" name="workshop" /><br/>
          <div id="wrapper" >
           <input type="text" placeholder="   facilitator" name="facilitator" /><br/>
          </div>

            <div className="">
              <input type="button" value="Add Facilitator" name="Add Facilitator" onClick={this.addFacilitator}/><br />  
            </div>
              
              <div className="onsite">
                <input type="checkbox" name="onsite"  />
                <p>Onsite</p>
              </div>

            <input type="text" placeholder="   Organization" name="organization" /><br/>
            <input type="text" placeholder="   location" name="location" /><br/>
            <input type="text" placeholder="   Notes" name="Notes" /><br />

            <label>Start Date</label>
            <label>End Date</label><br />
            <div className="dates">
              <input type="datetime-local" value="Start Date" name="startDate" />             {/*TODO: Check datetime input*/}
              <input type="datetime-local" value="End Date" name="endDate" />                 {/*TODO: Check datetime input*/}
            </div>

            <input type="button" value="Add Another Date" name="addEvent" /><br />

              
          <p>Attendees: </p>
          <input type="number" placeholder="Attendance" /> <br />
          <input type="button" value="submit"/>
          
          </form>

      </div>
    )
  }
}

export default EventEdit