import React, { Component } from 'react';
import EventCard from './EventCard';
import './EventCard.css'



class EventList extends Component {
    state = {
        events: null,
    }

    componentDidMount(){
        fetch("https://webs-backend-oxjtbmatkg.now.sh/workshops")
        .then(res => res.json())
        .then(events => {
          console.log(events);
            this.setState({
                events
        })
    })
    }

  render() {

    const events = this.state.events
    if(!events){
        return <h1>loading...</h1>
    }
    return (
        <div className="fetch">
        <input type="button" value="Calender View" name="viewCalender" />
            {
               events.map(singleEvent => {
                   return <EventCard key={singleEvent._id} singleEvent={singleEvent}/>
               }) 
            }
        </div>
    );
  }
}

export default EventList;