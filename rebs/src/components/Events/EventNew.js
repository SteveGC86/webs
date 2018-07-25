import React from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import styled from 'styled-components';
import axios from 'axios';


class NewEventForm extends React.Component {
  state = {
    redirect: false,
    selectedFacilitator: '',
    selectedOrganisation: '',
    selectedLocation: '',
    selectedWorkshop: '',
    selectedRoom: '',
    startDate: new Date(),
    endDate: new Date(),
    users: null,
    orgs: null,
    workshops: null,
  }
    

  //Handle info functions
  handleChange(event) {                                                       
    const url = `${process.env.REACT_APP_API_URI}/events/new`
    const data = { 
      "title": this.state.selectedWorkshop.value,
      "facilitatorObjs": this.state.selectedFacilitator.map(facilitator => {
        return {
          "id": facilitator.value,
          "status": "Pending"
        }
      }),
      "attendees": 0,
      "status": "Pending",
      "creator": null,
      "notes": event.target.notes.value,
      "onsite": event.target.onsite.checked,
      "organisation": this.state.selectedOrganisation.value._id,
      "bookings": [
        {
        "start": new Date(this.state.startDate),
        "end": new Date(this.state.endDate),
        "location": `${this.state.selectedLocation.value.street_add}, ${this.state.selectedLocation.value.suburb}`,
        "room": this.state.selectedRoom.label
        }]
    }

    console.log(this.state.selectedRoom.value)
    console.log(data)


    axios.post(url, data)
    .then(this.setState({redirect: true}))
    .catch(err => console.log(err.message))
  }

  componentDidMount(){
    this.props.updateHeaderTitle("New Event");

    axios.get(`${process.env.REACT_APP_API_URI}/users`)
    .then(users => {
      this.setState({users: users.data})
    })

    axios.get(`${process.env.REACT_APP_API_URI}/organisations`)
    .then(orgs => {
      this.setState({orgs: orgs.data})
    })

    axios.get(`${process.env.REACT_APP_API_URI}/workshops`)
    .then(workshops => {
      this.setState({workshops: workshops.data})
    })
    //                                                                          TODO: fetch organisation by id to find location
  }

  startDateChange = (date) => {
    this.setState({ startDate: date });
  }

  endDateChange = (date) => {
    this.setState({ endDate: date });
  }

  facilitatorSelect = (facilitator) => {
    this.setState({ selectedFacilitator: facilitator });
  }

  locationSelect = (location) => {
    this.setState({ selectedLocation: location });
  }

  roomSelect = (room) => {
    this.setState({ selectedRoom: room });
    // console.log(room)
  }

  organisationSelect = (organisation) => {
  this.setState({ selectedOrganisation: organisation });
}
  

  workshopSelect = (workshop) => {
    this.setState({ selectedWorkshop: workshop});
  }


    
  render(){
    const { startDate, endDate, redirect, selectedFacilitator, selectedOrganisation, selectedLocation, selectedWorkshop, users, orgs, workshops, selectedRoom } = this.state;

    
    
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


    if(redirect){
      return <Redirect to={'/events'}/>
    }
    if(!users || !orgs || !workshops){
      return <h3>Loading...</h3>
    }
    
    let locationsRange = null;
    if(selectedOrganisation){
      locationsRange = selectedOrganisation.value.locations.map(location => {
        return {value: location, label: `${location.street_add} ${location.suburb}`}
      })
    }
    let roomsRange = null;
    if(selectedLocation){
      roomsRange = selectedLocation.value.rooms.map(room => {
        return {value: room._id, label: room.room}
      })
    }

    return (
      <form id="newEventForm" onSubmit={(e) => {
        e.preventDefault();
        this.handleChange(e)
        document.getElementById('newEventForm').reset()
      }}>

        <SingleSelect
          name="workshopTitle"
          placeholder="Workshop"
          value={selectedWorkshop}
          onChange={this.workshopSelect}
          required
          options={workshops.map(workshop => {
            return {value: workshop._id, label: workshop.workshop_name}
          })}
        />
        
        <MultiSelect
          multi
          joinValues
          delimiter={','}
          name="facilitators"
          value={selectedFacilitator}
          onChange={this.facilitatorSelect}
          placeholder="Facilitators"
          options={users.map(user => {
            return {value: user._id, label: `${user.f_name} ${user.l_name}`}
          })}
        />

          

        <div className="onsite">
          <p>Onsite:</p>
          <input type="checkbox" name="onsite" />
        </div>

        <SingleSelect
          name="organisation"
          placeholder="Organisation"
          value={selectedOrganisation}
          onChange={this.organisationSelect}
          options={orgs.map(org => {
            return {value: org, label: org.org_name}
          })}
        />
      
        <SingleSelect
          name="location"
          placeholder="Location"
          value={selectedLocation}
          onChange={this.locationSelect}
          options={locationsRange}
        />

        <SingleSelect
          name="room"
          placeholder="Room"
          value={selectedRoom}
          onChange={this.roomSelect}
          options={roomsRange}
        />

        <p>
        <input placeholder="Event Notes" type="text" name="notes" />
        </p>

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

        <p><button type="submit">Submit</button></p>
        
      </form>
    )
  }
}

export default NewEventForm
