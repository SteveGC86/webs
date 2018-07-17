import React from 'react';

class NewEventForm extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   title: '',
    //   facilitator: '' 
    // };
    //Bind methods for inputs here
    this.handleChange = this.handleChange.bind(this);
  }
  //Handle info functions
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.onsite.value)

    const url = 'https://webs-backend-kpbyniydyc.now.sh/events/new'
    const data = { 
      title: event.target.title.value,
      newEvent: event.target.newEvent.value,
      facilitators: event.target.facilitator.value,
      onsite: event.target.onsite.checked,
      organisation: event.target.organisation.value,
      location: event.target.location.value,
      notes: event.target.notes.value,
      dateFrom: event.target.dateFrom.value,
      dateTo: event.target.dateTo.value
    }

    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  componentDidMount(){
    this.props.updateHeaderTitle("New Event");
  }

  render(){
    return (
      <form id="newEventForm" onSubmit={(e) => {
        e.preventDefault();
        this.handleChange(e)
        document.getElementById('newEventForm').reset()
      }}>

        <input placeholder="title" type="text" name="title" />

        <select id="newEvent" placeholder="newEvent" name="newEvent">
          <option value="memes101">Memes 101</option>
          <option value="html_css">HTML/CSS</option>
          <option value="javascript">Javascript</option>
        </select>

        <select name="facilitator">
          <option value="teacher1">Teacher 1</option>
          <option value="teacher2">Teacher 2</option>
          <option value="teacher3">Teacher 3</option>
        </select>

          <button name="addFacilitator">Add Another Facilitator</button>
          <button name="createShortCourse">Add New Short Course</button>

          <p>Onsite</p>
          <input type="checkbox" name="onsite" />

        <select name="organisation">
          <option value="coderAcademy">Coder Academy</option>
          <option value="redhill">Redhill</option>
        </select>

        <select name="location">
          <option value="melbourne">Melbourne</option>
          <option value="Sydney">Sydney</option>
        </select>

        <input placeholder="Notes" type="text" name="notes" />

        <div>
          Start: <input name="dateFrom" type="datetime-local"/>
        </div>

        <div>
          End: <input name="dateTo" type="datetime-local"/>
        </div>

        <button name="addDate">Add Date</button>

        <button type="submit">Submit</button>
        
      </form>
    )
  }
}

export default NewEventForm

// export default EventNewHeader
