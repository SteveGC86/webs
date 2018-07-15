import React from 'react'
import EventCard from './EventCard'

class EventList extends React.Component() {
  render(){
    
  
  // state = {
  //   events: null
  // }
  
  // componentDidMount() {
  //   eventAPI()
  //   .then(events => {          TODO: Add required api call  (steve)
  //     this.setState({
  //       events
  //     })
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })
  // }
  
  

    const {events} = this.state
    if(!events) return <h3>Loading...</h3>
      return 
          {
            events.map(event => {
              return 
              <EventCard key={event.id} event={this.props.event} />
            })
          }
  }
}


export default EventList