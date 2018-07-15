import React from 'react';

class NewFacilitatorForm extends React.Component() {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastname: '',
      email: '',
      address: ''
    }
    //Bind event here
    this.handleFacilitatorChange = this.handleFacilitatorChange.bind(this)
  }
  // Handle info function
  handleFacilitatorChange(e) {
    //Get e target name - which will be input name
    //Use this to target the key on out state object with the same name
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <form onSubmit={(e) =>{
        e.preventDefault()
      }}>

        <input placeholder="First Name" type="text" name="firstName" onChange={this.handleChange} value={this.state.value} />

        <input placeholder="Last Name" type="text" name="lastName" onChange={this.handleChange} value={this.state.value} />

        <input placeholder="Email" type="text" name="email" onChange={this.handleChange} value={this.state.value} />

        <input placeholder="Address" type="text" name="address" onChange={this.handleChange} value={this.state.value} />

      </form>
    )
  }
}

export { NewFacilitatorForm }