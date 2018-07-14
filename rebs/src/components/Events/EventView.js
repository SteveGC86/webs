import React, { Component} from 'react';
import moment from 'moment';
import Geocode from 'react-geocode';


class EventView extends Component {
    state = {
        events: null
    }

    async componentDidMount(){
        const url = "http://localhost:3000/events"
        fetch(url)
        .then(events => events.json())
        .then(allEvents => this.setState({
            events: allEvents
        }))
    }

    render(){
        Geocode.setApiKey(process.env.REACT_APP_GEOCODER_API);


        const events = this.state.events
        if(!events){
            return <h1>Loading...</h1>
        } 
        return (
            <div className="eventView">
            {console.log(events)}
            {events.map(event => {
                return <div key={event.id}>
                    <h2>{event.title}</h2><br/>
                    {event.facilitators.map(fac => {
                        return <h4 key={fac.id}>{fac.role} - {fac.name} ({fac.confirmed ? "confirmed" : "pending"})<br/></h4>
                    })}<br/>
                    {event.bookings.map(booking => {
                        return <p key={booking.id}><b>{moment(booking.start_time).format("dddd, MMMM Do YYYY")}</b> <br/>{moment(booking.start_time).format("h:mm:ss a")} - {moment(booking.end_time).format("h:mm:ss a")}<br/>
                        {booking.location}<br/><br/></p>
                    })}<br/>
                </div>
            })}
        
            </div>
          )
    }
}

export default EventView