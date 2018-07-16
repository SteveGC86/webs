import React, { Component } from 'react'
import Header from '../Header/Header'


class EventEdit extends Component {

  componentDidMount(){
    this.props.updateHeaderTitle("Edit Event");
  }
  
  render(){
    return (
      <div className="eventEdit">
        <h1>Edit Workshop</h1>
          <form onSubmit={(e) =>{
            e.preventDefault()
          }}>
          <div id="wrapper">
            <input type="text" placeholder="   workshop" name="workshop" /><br/>
            <input type="text" placeholder="   facilitator" name="facilitator" /><br/>
          </div>
            <button placeholder="Add Facilitator" className="AddFacilitator"></button>
            <div className="">
              <input type="button" value="Add Facilitator" name="Add Facilitator" /><br />
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