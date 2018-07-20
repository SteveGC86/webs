import React from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import styled from 'styled-components';


class NewEventForm extends React.Component {
  state = {
    redirect: false,
    selectedFacilitator: '',
    selectedOrganisation: '',
    selectedLocation: '',
    selectedWorkshop: '',
    startDate: new Date(),
    endDate: new Date(),
  }
    

  //Handle info functions
  handleChange(event) {
    console.log(this.state.selectedFacilitator)
    // const facilitators = this.state.selectedFacilitator.map(facilitator => {
    //   return facilitator.label
    // })
    
    const url = 'https://webs-backend-dev.now.sh/events/new'
    const data = { 
      title: this.state.selectedWorkshop.label,
      facilitators: this.state.selectedFacilitator,
      onsite: event.target.onsite.checked,
      organisation: this.state.selectedOrganisation,
      bookings: [{
        location: this.state.selectedLocation,
        start: this.state.startDate,
        end: this.state.endDate
      }],
      notes: event.target.notes.value,
      
    }
    console.log(data)

    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(() => {
      this.setState({redirect: true})
    });
  }

  componentDidMount(){
    this.props.updateHeaderTitle("New Event");
  }

  startDateChange = (date) => {
    this.setState({ startDate: date });
  }

  endDateChange = (date) => {
    this.setState({ endDate: date });
  }

  facilitatorSelect = (facilitator) => {
    this.setState({ selectedFacilitator: facilitator });
    console.log(facilitator)
  }

  locationSelect = (location) => {
    this.setState({ selectedLocation: location });
    console.log(location)
  }

  organisationSelect = (organisation) => {
  this.setState({ selectedOrganisation: organisation });
  console.log(organisation)
  }

  workshopSelect = (workshop) => {
    this.setState({ selectedWorkshop: workshop});
    console.log(workshop)
  }


    
  render(){
    const { startDate, endDate, redirect, selectedFacilitator, selectedOrganisation, selectedLocation, selectedWorkshop } = this.state;
    
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
          simpleValue
          joinValues
          delimiter={','}
          name="facilitators"
          value={selectedFacilitator}
          onChange={this.facilitatorSelect}
          placeholder="Facilitators"
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

          

          <div className="onsite">
            <p>Onsite:</p>
            <input type="checkbox" name="onsite" />
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
          />
        
          <SingleSelect
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

        {/* <div>
          Start: <input name="dateFrom" type="datetime-local"/>
        </div>

        <div>
          End: <input name="dateTo" type="datetime-local"/>
        </div> */}

        <p><button type="submit">Submit</button></p>
        
      </form>
    )
  }
}

export default NewEventForm
