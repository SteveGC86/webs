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
      value: ''
    };
    //Bind methods for inputs here
    // this.handleChange = this.handleChange.bind(this);
  }
  //Handle info functions
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  render(){
    return (
      <form>
        <input />
      </form>
    )
  }
}

export { Header }

// export default EventNewHeader
