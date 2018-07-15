import React from 'react'

class EventCard extends React.Component(){
  constructor(props);
  super(props);

  // let event = this.props.event

  render() {
    <div className="eventCard" key={this.props.event.id}>
      <h4>{this.event.workshop}</h4>
      <h5>{this.event.booking.location}</h5>
      <input type="button">View</input> 
    </div>
  }
}

export default EventCard