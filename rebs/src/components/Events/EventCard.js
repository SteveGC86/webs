import React, { Component } from 'react';



class EventCard extends Component {
  render() {
      const singleEvent = this.props.singleEvent

    return (
        <div className="fetch">
            <p>{singleEvent.title}</p>
            <p>{singleEvent.status}</p>
        </div>
    );
  }
}

export default EventCard;
