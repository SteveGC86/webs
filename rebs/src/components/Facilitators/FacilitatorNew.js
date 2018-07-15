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
  
}