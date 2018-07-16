import React, { Component } from 'react'


class EventEdit extends Component {
  
  render(){
    const singleEvent = this.props.location.state.singleEvent
    return (
      <div className="eventEdit">
        <h1>Edit Workshop</h1>
          <form onSubmit={(e) =>{
            e.preventDefault()
            const inputs = e.target
            Object.entries(inputs).map(key => {
              console.log(key[1].value)
            })
          }}>
            <input type="text" value={singleEvent.title} name="title" /><br/>
            <input type="text" value={singleEvent.facilitators} name="facilitator" /><br/>
            <div className="">
              <button value="Add Facilitator" name="Add Facilitator">Add Facilitator</button><br />
            </div>
              
              <div className="onsite">
                <input type="checkbox" name="onsite" value={singleEvent.onsite} />
                <p>Onsite</p>
              </div>

            <input type="text" value={singleEvent.organisation} name="organisation" /><br/>
            <input type="text" value={singleEvent.notes} name="Notes" /><br />

            <label>Start Date</label>
            <label>End Date</label><br />
            <div className="dates">
              <input type="datetime-local" value="Start Date" name="startDate" />             {/*TODO: Check datetime input*/}
              <input type="datetime-local" value="End Date" name="endDate" />
              <input type="text" value={singleEvent.location} name="location" /><br/>                 {/*TODO: Check datetime input*/}
            </div>
            <button value="Add Another Date" name="addEvent">Add Another Date</button>

              
          <p>Attendees: </p>
          <input type="number" placeholder="Attendance" /> <br />

          <select name="status" value={singleEvent.status}>
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