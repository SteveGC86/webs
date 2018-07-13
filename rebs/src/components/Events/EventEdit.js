
import React from 'react'


function EventEdit() {
  return (
    <div className="eventEdit">
      <h1>Edit Workshop</h1>
        <form onSubmit={(e) =>{
          e.preventDefault()
        }}>
          <input type="text" placeholder="workshop" name="workshop" /><br/>
          <input type="text" placeholder="facilitator" name="facilitator" /><br/>
          <input type="button" placeholder="Add Facilitator" name="Add Facilitator" /><br />
          
            <input type="checkbox" name="onsite"  />
            <p>Onsite</p>

          <input type="text" placeholder="Organization" name="organization" /><br/>
          <input type="text" placeholder="location" name="location" /><br/>
          <input type="text" placeholder="Notes" name="Notes" /><br />

          <input type="datetime-local" placeholder="Start Date" name="startDate" />             {/*TODO: Check datetime input*/}
          <input type="datetime-local" placeholder="End Date" name="endDate" />                 {/*TODO: Check datetime input*/}
          <input type="button" placeholder="Add Another Event" name="addEvent" /><br />

            
        <p>Attendees: </p>
         <input type="number" placeholder="Attendance" />
         <input type="button" name="submit"/>
        
        </form>

    </div>
  )
}

export default EventEdit