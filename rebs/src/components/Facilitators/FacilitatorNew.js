import React from 'react';

class NewFacilitatorForm extends React.Component {
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

        <input placeholder="First Name" type="text" name="firstName" onChange={this.handleFacilitatorChange} value={this.state.value} />

        <input placeholder="Last Name" type="text" name="lastName" onChange={this.handleFacilitatorChange} value={this.state.value} />

        <input placeholder="Email" type="text" name="email" onChange={this.handleFacilitatorChange} value={this.state.value} />

        <input placeholder="Address" type="text" name="address" onChange={this.handleFacilitatorChange} value={this.state.value} />

        <select name="facilitatorRole">
          <option value="leadFacilitator">Lead Facilitator</option>
          <option value="assistantFacilitator">Assistant Facilitator</option>
        </select>

        <select name="defaultLocation">
          <option value="melbourne">Melbourne</option>
          <option value="sydney">Sydney</option>
          <option value="brisbane">Brisbane</option>
        </select>

      </form>
    )
  }
}

export { NewFacilitatorForm }