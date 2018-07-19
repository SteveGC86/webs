import React from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import styled from 'styled-components';


class NewEventForm extends React.Component {
  state = {
    redirect: false,
    selectedOption: '',
    selectedOrganisation: '',
    selectedLocation: '',
    startDate: new Date(),
    endDate: new Date(),
  }
    

  //Handle info functions
  handleChange(event) {
    console.log(event.target)
    
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.onsite.value)

    const url = 'https://webs-backend-dev.now.sh/events/new'
    const data = { 
      title: event.target.title.value,
      // newEvent: event.target.newEvent.value,
      facilitators: this.state.selectedfacilitator,
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

  facilitatorSelect = (selectedfacilitator) => {
    this.setState({ facilitator: selectedfacilitator });
  }

  locationSelect = (selectedLocation) => {
    this.setState({ location: selectedLocation });
  }

  organisationSelect = (selectedOrganisation) => {
  this.setState({ organisation: selectedOrganisation });
  }


    
  render(){
    const { startDate, endDate, redirect, selectedfacilitator, selectedOrganisation, selectedLocation } = this.state;
    


    const MultiSelect = styled(Select)`
    &.Select--multi  {
      width:40vw;
      margin: 0 30vw 0 30vw;
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

        <p><input placeholder="Workshop Title" type="text" name="title" /></p>

        {/* <p>Short Course:<br/>
        <select id="newEvent" placeholder="newEvent" name="newEvent">
          <option value="memes101">Memes 101</option>
          <option value="html_css">HTML/CSS</option>
          <option value="javascript">Javascript</option>
        </select></p> */}
        {/* <p>
          <button name="createShortCourse">Add New Short Course</button>
        </p> */}

        <label>Facilitators:</label>
        <MultiSelect
          multi
          joinValues
          delimiter={','}
          name="facilitators"
          value={selectedfacilitator}
          onChange={this.facilitatorSelect}
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
            <p>Onsite</p>
            <input type="checkbox" name="onsite" />
          </div>

        <p>Organisation:<br/>
          {/* <select name="organisation">
            <option value="coderAcademy">Coder Academy</option>
            <option value="redhill">Redhill</option>
          </select> */}
          <Select
          name="Organisation"
          simpleValue
          value={selectedOrganisation}
          onChange={this.organisationSelect}
          options={[
            { value: 'Coder Academy', label: 'Coder Academy' },
            { value: 'RedHill', label: 'Red Hill' },
           
            ]}
          />
        </p>
        

        <p>Location:<br/>
          {/* <select name="locations">
            <option value="Melbourne">Melbourne</option>
            <option value="Sydney">Sydney</option>
          </select> */}
          <Select
          name="Location"
          simpleValue
          value={selectedLocation}
          onChange={this.locationSelect}
          options={[
            { value: 'Melbourne', label: 'Melbourne' },
            { value: 'Sydney', label: 'Sydney' },
           
            ]}
          />
        </p>

        <p>
        <input placeholder="Notes" type="text" name="notes" />
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

// export default EventNewHeader
