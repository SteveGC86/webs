import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import styled from 'styled-components';



class EventEdit extends Component {
  
  state = {
    redirect: false,
    selectedOption: '',
    startDate: new Date(),
    endDate: new Date(),
    selectedWorkshop: '',
    selectedFacilitator: '',
  }
  


  handleChange = (e) => {
    const facilitators = this.state.selectedFacilitator.map(facilitator => {
      return facilitators
    })

    const workshop_id = this.props.location.state.singleEvent._id
  const url = `https://webs-backend-dev.now.sh/events/${workshop_id}`
      axios.patch(url, {
        _id: workshop_id,
      title: this.state.selectedWorkshop,
      organisation: e.target.organisation.value,
      notes: e.target.notes.value,
      facilitators:  facilitators,
      attendees: e.target.attendees.value,
      onsite: e.target.onsite.checked,
      status: e.target.status.value,
      bookings: [{
        location: e.target.location.value,
        start: this.state.startDate,
        end: this.state.endDate
      }],
      
    
   
    })
    .then((res) => {
      console.log(res.data.title);
      console.log(res.data);
      this.setState({redirect: true})
    })
    .catch(function (error) {
      console.log(error);
    });
  }


      startDateChange = (date) => {
        this.setState({ startDate: date });
      }

    endDateChange = (date) => {
      this.setState({ endDate: date });
    }

    workshopSelect = (workshop) => {
      this.setState({ selectedWorkshop: workshop});
      console.log(workshop  )
    }
    
    facilitatorSelect = (facilitator) => {
      this.setState({ selectedFacilitator: facilitator });
      console.log(facilitator[0].label)
      }

      componentDidMount(){
        const singleEvent = this.props.location.state.singleEvent
        this.setState({
          startDate: singleEvent.bookings[0].start,
          endDate: singleEvent.bookings[0].end,
        })
      }


    render() {
      const singleEvent = this.props.location.state.singleEvent
      const { startDate, endDate, redirect, selectedWorkshop, selectedFacilitator } = this.state;

      const MultiSelect = styled(Select)`
          &.Select--multi  {
            diplay: flex;
            align-content: center;
            width: 70vw;
            margin: 0 30vw 0 30vw;
            border: 1px solid #363637;
            border-radius: 3px;
          }` 

    if(redirect){

      return <Redirect to={{
        pathname: `/events`,
        state: { singleEvent: singleEvent }
      }}/>
    }
    return (
      <div className="eventEdit">
        <h2>Edit Workshop</h2>
          <form onSubmit={(e) =>{
            e.preventDefault()
            this.handleChange(e)
            // console.log(this.input);
          }}>
            
              <Select
                    name="workshopTitle"
                    simpleValue
                    value={selectedWorkshop}
                    onChange={this.workshopSelect}
                    required
                    options={[
                      { value: 'Hands-on Coding for Beginners', label: 'Hands-on Coding for Beginners' },
                      { value: 'Hands-on Coding for Intermediate', label: 'Hands-on Coding for Intermediate' },
                      { value: 'Unity Gamemaker for Kids', label: 'Unity Gamemaker for Kids' },
                      { value: 'Build a Web App (HTML, CSS, JavaScript', label: 'Build a Web App (HTML, CSS, JavaScript) ' },
                      { value: 'IoT and Ardunio workshop ', label: 'IoT and Ardunio workshop ' },
                      { value: 'Coding & Robotics for Kids', label: 'Coding & Robotics for Kids' },
                      { value: 'userSchool Excursion - Intro to JavascriptID1', label: 'School Excursion - Intro to Javascript ' },
                      { value: 'Unity Gamemaker for Kids Day 3 of 3', label: 'Unity Gamemaker for Kids Day 3 of 3' },
                      { value: 'Become a Digital Artist', label: 'Become a Digital Artist' },
                      { value: 'userCreate VFX in FilmID1', label: 'Create VFX in Film' },
                      { value: 'Code Your World', label: 'Code Your World' },
                      { value: 'Immersive Robotocs', label: 'Immersive Robotocs' },
                      { value: 'Gamers Unite', label: 'Gamers Unite' },
                      { value: '3D Character Creation', label: '3D Character Creation ' },
                      { value: 'Virtual Reality (VR) Experience', label: 'Virtual Reality (VR) Experience' }
                    ]}
                />
            
            
                  <MultiSelect
                    multi
                    joinValues
                    delimiter={','}
                    name="facilitators"
                    value={selectedFacilitator}
                    onChange={this.facilitatorSelect}
                    required
                    options={[
                      { value: 'userID1', label: 'Amos Jon Wilksch' },
                      { value: 'userID2', label: 'Annabelle (Bella) Maguire' },
                      { value: 'userID3', label: 'Andrew Madden' },
                      { value: 'userID4', label: 'Arian Yusef' },
                      { value: 'userID5', label: 'Billy' },
                      { value: 'userID6', label: 'Bushra Malik' },
                      { value: 'userID7', label: 'Camilla Stadlinger' },
                      { value: 'userID8', label: 'Christian Saviane' },
                      { value: 'userID9', label: 'Jacqueline tate ' },
                      { value: 'userID10', label: 'Kelsey Birrel' },
                      { value: 'userID11', label: 'Lani Gambino' },
                      { value: 'userID12', label: 'Marc Pestamento' },
                      { value: 'userID13', label: 'Najat Smeda' },
                      { value: 'userID14', label: 'Pauline' },
                      { value: 'userID15', label: 'Robert Wellington' },
                      { value: 'userID16', label: 'Simon Dwyer' },
                      { value: 'userID17', label: 'Sophie' },
                      { value: 'userID18', label: 'Steve Christenson' },
                      { value: 'userID19', label: 'Suzanne Thomson' },
                      { value: 'userID20', label: 'Tyson Butler-Boschma' },
                      { value: 'userID21', label: 'Teresa Fae' },
                    ]}
                  />
             
              
              
            <div className="onsite" >
              <p>Onsite</p>
              <input type="checkbox" defaultValue={singleEvent.onsite} name="onsite" required/>
            </div>

            <input type="text" ref={this.organistation} placeholder="Organisation" defaultValue={singleEvent.organisation}      name="organisation" /><br/>
            <input type="text"  ref={this.notes} placeholder="Notes" defaultValue={singleEvent.notes} name="notes" required/><br />

            <div className="dates">
              {singleEvent.bookings.map((booking, i) => {
                return <div key={booking._id} className="singleBooking"><h4>Booking {i+1}</h4>
              
              <div className="datesAlign">
                <p>Start Time: <br/></p>
                  <DateTimePicker
                    value={startDate}
                    onChange={this.startDateChange}
                  />

                  <p>End Time:<br/></p>
                  <DateTimePicker
                    value={endDate}
                    onChange={this.endDateChange}
                  />  
              </div>  
              
                <input type="text" ref={this.location} defaultValue={booking.location} name="location" required/><br/>
            </div>
              })}             
            </div>
            {/* <button value="Add Another Date" name="addEvent">Add Another Date</button> */}

              
          <p>Attendees: </p>
          <input type="number" placeholder="0" defaultValue={singleEvent.attendees} name="attendees" required/> <br />

          <select name="status" defaultValue={singleEvent.status} name="status">
            <option value="confirmed">Confirmed</option>
            <option value="pending" >Pending</option>
            <option value="cancelled">Cancelled</option>
          </select><br/>

          <button value="submit">Submit</button>
          
        </form>

      </div>
    )
  }
}


export default EventEdit