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
    startDate: new Date(),
    endDate: new Date(),
    selectedWorkshop: '',
    selectedFacilitator: '',
    selectedLocation: '',
    selectedOrganisation: '',
    selectedStatus: '',
  }
  


  handleChange = (e) => {
    const facilitators = this.state.selectedFacilitator.map(facilitator => {
      return facilitator
    })

    const workshop_id = this.props.location.state.singleEvent._id
    const url = `https://webs-backend-dev.now.sh/events/${workshop_id}`
      axios.patch(url, {
        _id: workshop_id,
      title: this.state.selectedWorkshop,
      organisation: this.state.selectedOrganisation,
      notes: e.target.notes.value,
      facilitators:  facilitators,
      attendees: e.target.attendees.value,
      onsite: e.target.onsite.checked,
      status: this.state.selectedStatus,
      bookings: [{
        location: this.state.selectedLocation,
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
      console.log(workshop)
    }
    
    facilitatorSelect = (facilitator) => {
      this.setState({ selectedFacilitator: facilitator });
      }

      locationSelect = (location) => {
        this.setState({ selectedLocation: location });
        }

    organisationSelect = (organisation) => {
      this.setState({ selectedOrganisation: organisation})
    }

    statusSelect = (status) => {
      this.setState({ selectedStatus: status})
    }

    componentDidMount(){
      const singleEvent = this.props.location.state.singleEvent
      this.setState({
        startDate: singleEvent.bookings[0].start,
        endDate: singleEvent.bookings[0].end,
        selectedWorkshop: {value: singleEvent.title, label: singleEvent.title},
        selectedFacilitator: {value: singleEvent.facilitators, label: singleEvent.facilitators},
        selectedLocation: {value: singleEvent.bookings[0].location, label: singleEvent.bookings[0].location},
        selectedOrganisation: {value: singleEvent.organisation, label: singleEvent.organisation},
        selectedStatus: {value: singleEvent.status, label: singleEvent.status}
      })
    }


    render() {
      const singleEvent = this.props.location.state.singleEvent
      const { startDate, endDate, redirect, selectedStatus, selectedWorkshop, selectedFacilitator, selectedLocation, selectedOrganisation } = this.state;




      const MultiSelect = styled(Select)`
    &.Select--multi  {
      width:70vw;
      margin: 0 15vw 3vh 15vw;
      font-size: 3vh;
    }
    @media (min-width: 1000px){
      &.Select--multi  {
        width:40vw;
        margin: 0 30vw 3vh 30vw;
        font-size: 3vh;
      }
    }
  `

      const SingleSelect = styled(Select)`
        &.Select  {
          width:70vw;
          margin: 0 15vw 3vh 15vw;
          font-size: 3vh;
        }
        @media (min-width: 1000px){
          &.Select  {
            width:40vw;
            margin: 0 30vw 3vh 30vw;
            font-size: 3vh;
          }
        }
        `
        const LocationSelect = styled(Select)`
        &.Select  {
          width:70vw;
          margin: 3vh 15vw 3vh 0vw;
          font-size: 3vh;
        }
        @media (min-width: 1000px){
          &.Select  {
            width:40vw;
            margin: 3vh 0vw 3vh 15vw;
            font-size: 3vh;
          }
        }
        `
    if(redirect){

      return <Redirect to={{
        pathname: `/events`,
        state: { singleEvent: singleEvent }
      }}/>
    }
    return (
      <div className="eventEdit">
        <h2>Edit Workshop</h2><br/><br/>
          <form onSubmit={(e) =>{
            e.preventDefault()
            this.handleChange(e)
            console.log(this.input);
          }}>
            
              
            <SingleSelect
              name="workshopTitle"
              simpleValue
              value={selectedWorkshop}
              onChange={this.workshopSelect}
              required
              options={[
                { value: 'userID1', label: 'Hands-on Coding for Beginners' },
                { value: 'userID1', label: 'Hands-on Coding for Intermediate' },
                { value: 'userID1', label: 'Unity Gamemaker for Kids' },
                { value: 'userID1', label: 'Build a Web App (HTML, CSS, JavaScript) ' },
                { value: 'userID1', label: 'IoT and Ardunio workshop ' },
                { value: 'userID1', label: 'Coding & Robotics for Kids' },
                { value: 'userID1', label: 'School Excursion - Intro to Javascript ' },
                { value: 'userID1', label: 'Unity Gamemaker for Kids Day 3 of 3' },
                { value: 'userID1', label: 'Become a Digital Artist' },
                { value: 'userID1', label: 'Create VFX in Film' },
                { value: 'userID1', label: 'Code Your World' },
                { value: 'userID1', label: 'Immersive Robotocs' },
                { value: 'userID1', label: 'Gamers Unite' },
                { value: 'userID1', label: '3D Character Creation ' },
                { value: 'userID1', label: 'Virtual Reality (VR) Experience' }
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
              <input type="checkbox" defaultChecked={singleEvent.onsite ? true : false} name="onsite" />
            </div>

            <SingleSelect
          name="organisation"
          placeholder="Organisation"
          simpleValue
          value={selectedOrganisation}
          onChange={this.organisationSelect}
          options={[
            { value: 'Coder Academy', label: 'Coder Academy' },
            { value: 'RedHill', label: 'Red Hill' },
           
            ]}
          /><br/>
            <input type="text"  ref={this.notes} placeholder="Notes" defaultValue={singleEvent.notes} name="notes" required/><br />

            <div className="dates">
              <div className="singleBooking">
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
              
              <LocationSelect
                name="location"
                placeholder="Location"
                simpleValue
                value={selectedLocation}
                onChange={this.locationSelect}
                options={[
                  { value: 'Melbourne', label: 'Melbourne' },
                  { value: 'Sydney', label: 'Sydney' },
                
                  ]}
                />
            </div>            
            </div>

              
          <p>Attendees: </p>
          <input type="number" placeholder="0" defaultValue={singleEvent.attendees} name="attendees" required/> <br /><br/>

          <SingleSelect
          name="status"
          placeholder="Workshop Status"
          simpleValue
          value={selectedStatus}
          onChange={this.statusSelect}
          options={[
            { value: 'confirmed', label: 'Confirmed' },
            { value: 'pending', label: 'Pending' },
            { value: 'cancelled', label: 'Cancelled' },
           
            ]}
          /><br/>

          <button value="submit">Submit</button>
          
        </form>

      </div>
    )
  }
}


export default EventEdit