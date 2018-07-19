import React from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DateTimePicker from 'material-ui-pickers/DateTimePicker';



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
      facilitators: this.state.selectedOption,
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

  facilitatorSelect = (selectedOption) => {
    this.setState({ selectedOption });
  }

  locationSelect = (selectedLocation) => {
    this.setState({ selectedLocation });
  }

  organisationSelect = (selectedOrganisation) => {
  this.setState({ selectedOrganisation });
  }

  render(){
    const { startDate, endDate, redirect, selectedOption, selectedOrganisation, selectedLocation } = this.state;
    

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
        <Select
          multi
          joinValues
          delimiter={','}
          name="facilitators"
          value={selectedOption}
          onChange={this.facilitatorSelect}
          options={[
            { value: '09348509342780543209', label: 'Teacher 1' },
            { value: '4385794832759823', label: 'Teacher 2' },
            { value: '4325984239058', label: 'Teacher 3' },
            { value: '4320958094526754', label: 'Teacher 4' },
            { value: '34205984309275234', label: 'Teacher 5' },
            { value: '5342095840923850943', label: 'Teacher 6' },
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
