import React from 'react';

const Header = function EventNewHeader() {
    return (
      <h1>New Workshop</h1>
    );
}



class NewEventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      workshopName: '',
      facilitatorName: ''
    };
    //Bind methods for inputs here
    this.handleChange = this.handleChange.bind(this)
  }
  //Handle info functions
  handleChange (evt) {
    // Get the evt.target.name (which will be the input name)
    // Use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render(){
    return (
      <form>
        <div>
          <input placeholder="Workshop" type="text" name="workshopName" onChange={this.handleChange} value={this.state.value} />
        </div>
        <div>
          <input placeholder="Facilitator" type="text" name="facilitatorName" onChange={this.handleChange} value={this.state.value}/>
        </div>
        <div>
          <button name="createNewWorkshop ">Add Another Facilitator</button>
        </div>
        <div>
          <button name="createNewWorkshop ">Create New Workshop</button>
        </div>
        <div>
          <input type="checkbox" name="onsite" value="onsiteWorkshop" /> Onsite
        </div>
      </form>
    )
  }
}

export { Header, NewEventForm }

// export default EventNewHeader
