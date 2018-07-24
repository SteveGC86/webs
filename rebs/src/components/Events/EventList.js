import React, { Component } from 'react';
import EventCard from './EventCard';


class EventList extends Component {
    state = {
        events: null,
    }

    componentDidMount(){
        this.props.updateHeaderTitle("Upcoming Events");
        fetch(`${process.env.REACT_APP_API_URI}/events`)
        .then(res => res.json())
        .then(events => {
            this.setState({
                events
        })
        
    })
    }

  render() {

    const events = this.state.events
    if(!events){
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
            <div className="fetch">
                {
                events.map(singleEvent => {
                    return <EventCard key={singleEvent._id} singleEvent={singleEvent}
                    />
                }) 
                }
            </div>
        </div>
    );
  }
}

export default EventList;