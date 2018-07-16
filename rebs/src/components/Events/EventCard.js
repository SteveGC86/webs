import React from 'react'

class EventCard extends React.Component {
  

  // let event = this.props.event

  render() {
    const singleEvent = this.props.singleEvent
    return(
    <div className="eventCard" >
      <h4>{singleEvent.title}</h4>
      {console.log(singleEvent)}
      <h5>{singleEvent.bookings.map(booking => {
        return booking.location})}</h5>
      <button>View</button> 
    </div>
    )}
}

export default EventCard