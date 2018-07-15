import React from 'react';

const Header = function EventNewHeader() {
    return (
      <h1>New Event</h1>
    );
}



class NewEventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: ''
    };
    //Bind methods for inputs here
    this.handleChange = this.handleChange.bind(this);
  }
  //Handle info functions
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <form>
        <select name="workshop">
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

          <input type="checkbox" name="onsite" value="onsiteCourse" /> Onsite

        <select name="organisation">
          <option value="coderAcademy">Coder Academy</option>
          <option value="redhill">Redhill</option>
        </select>

        <select name="location">
          <option value="melbourne">Melbourne</option>
          <option value="Sydney">Sydney</option>
        </select>

        <input placeholder="Notes" type="text" name="notes" onChange={this.handleChange} value={this.state.value} />

        <div>
          Start: <input type="datetime-local"/>
        </div>

        <div>
          End: <input type="datetime-local"/>
        </div>

        <button name="addDate">Add Date</button>
      </form>
    )
  }
}

export { Header, NewEventForm }

// export default EventNewHeader
