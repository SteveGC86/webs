import React from 'react'
import  './EventEdit.css'




function EventEdit() {
  return (
    <div className="eventEdit">
      <h1>Edit Workshop</h1>
        <form onSubmit={(e) =>{
          e.preventDefault()
        }}>
          <input type="text" placeholder="   Workshop" name="workshop" required/><br/>
          <input type="text" placeholder="   Facilitator" name="facilitator" required/><br/>
          <button placeholder="Add Facilitator" className="AddFacilitator" required></button>
          <div className="">
            <input type="button" value="Add Facilitator" name="addFacilitator" required/><br />
          </div>
            
            <div className="onsite">
              <input type="checkbox" name="onsite"  />
              <p>Onsite</p>
            </div>

          <input type="text" placeholder="   Organization" name="organization" required/><br/>
          <input type="text" placeholder="   Location" name="location" required/><br/>
          <input type="text" placeholder="   Notes" name="Notes" required/><br />

          <label>Start Date</label>
          <label>End Date</label><br />
          <div className="dates">
            <input type="datetime-local" value="Start Date" name="startDate" required/>             {/*TODO: Check datetime input*/}
            <input type="datetime-local" value="End Date" name="endDate" required/>              {/*TODO: Check datetime input*/}
          </div>
         

          <input type="button" value="Add Another Date" name="addEvent" /><br />

            
        <p>Attendees: </p>
         <input type="number" placeholder="Attendance" /> <br />
         <input type="button" value="submit"/>
        
        </form>

    </div>
  )
}

export default EventEdit