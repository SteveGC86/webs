import React, { Component } from 'react'
import Header from '../Header/Header'
import './EventEdit.css'


class EventEdit extends Component {
  state = {
    facilitator: 1,
  }
  // constructor(props) {
  //   super(props)
  // }

  // addWorkshop(workshop, facilitator) {
  //   this.props.addWorkshop(workshop, facilitator)
  // }

  // removeWorkshop(workshop, facilitator) {
  //   this.props.removeWorkshop(workshop, facilitator)
  // // }

  // componentDidMount(){
    
  // }

  // const data = {
  //   workshop: e.target.workshop.value,
  //   facilitator:  e.target.facilitator.value,
  //   }
  // handleChange = (e) => {
  // const url = 'https://webs-backend-kpbyniydyc.now.sh/events/{this.props.work}' 
    
  //   fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers:{
  //       'Content-Type': 'applications/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .catch(error => console.error('Error:', error))
  //   .then(response => console.log('Success:', response))
  // }
  
  addFacilitator = () => {
    this.setState((prevState, props) => {
      facilitator: prevState.facilitator ++ 
      console.log(this.state.facilitator);
    })
    
    
    
    // const facilitator = document.getElementById('wrapper').innerHTML += '<br/> <input type="text" placeholder=" Facilitator"name="facilitator" />'
    // // console.log(facilitator);
    // {console.log(document.getElementById('wrapper'))}
    // // {console.log(document.getElementById('wrapper').input)}
    // const nodes = document.querySelectorAll("input[name='facilitator']")
    // console.log(nodes)
  }
  removeFacilitator = () => {
    this.setState((prevState, props) => {
      facilitator: prevState.facilitator -- 
      console.log(this.state.facilitator);
    })
    // const nodes = document.querySelectorAll("input[name='facilitator']")
    // const remove = [].slice.call(nodes).pop()
    // nodes.removeChild(  )
    // var arr = Array.prototype.slice.call(nodes)
    // console.log(arr)
    // console.log(nodes);
    //  -= '<br/> <input type="text" placeholder= "Facilitator" name="facilitator" />'
    // console.log(remove)
  }
  // const workshop = this.refs.workshop.value
  // const facilitator = this.refs.facilitator.value

  // if(!workshop || !facilitator) {
  //   return;
  // }

  
  render() {
    return (
      <div className="eventEdit">
        <h1>Edit Workshop</h1>
          <form onSubmit={(e) =>{
            e.preventDefault()
          }}>
            <input ref="workshop" type="text" placeholder="   workshop" name="workshop" /><br/>
          <div id="wrapper" >
           <input ref="facilitator" type="text" placeholder="   facilitator" name="facilitator" />
          </div>

            <div className="button">
              <input type="button" value="Add Facilitator" name="Add Facilitator" onClick={this.addFacilitator}/><br />
              {this.state.facilitator <= 2 ? "" : <input type="button" value="Remove Facilitator" name="Remove Facilitator" onClick={this.removeFacilitator} />}
                
              
              
            </div>
              
              <div className="onsite">
                <input type="checkbox" name="onsite"  />
                <p>Onsite</p>
              </div>

            <input type="text" placeholder="   Organization" name="organization" /><br/>
            <input type="text" placeholder="   location" name="location" /><br/>
            <input type="text" placeholder="   Notes" name="Notes" /><br />

            <label>Start Date</label>
            <label>End Date</label><br />
            <div className="dates">
              <input type="datetime-local" value="Start Date" name="startDate" />             {/*TODO: Check datetime input*/}
              <input type="datetime-local" value="End Date" name="endDate" />                 {/*TODO: Check datetime input*/}
            </div>

            <input type="button" value="Add Another Date" name="addEvent" /><br />

              
          <p>Attendees: </p>
          <input type="number" placeholder="Attendance" /> <br />
          <input type="button" value="submit"/>
          
          </form>

      </div>
    )
  }
}

export default EventEdit