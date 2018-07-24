import React from 'react';
import axios from 'axios';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import styled from 'styled-components';
import {Redirect} from 'react-router-dom'

class NewFacilitatorForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      role: '',
      defaultLocation: '',
      contact_no: '',
      redirect: false
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

  changeRole = (role) => {
    this.setState({ role: role });
  }

  changeLocation = (location) => {
    this.setState({ defaultLocation: location });
  }

  submitForm(){                                                      
      const url = `${process.env.REACT_APP_API_URI}/users/new`
      axios.post(url, {
      email: this.state.email,
        role: this.state.role,
        f_name: this.state.firstName,
        l_name: this.state.lastName,
        contact_no: this.state.contact_no,
        default_location: this.state.defaultLocation,
        availability: true,
        longitude: 0,
        Latitude: 0,
        skills: []
      })
      .then(this.setState({redirect: true}))
  }


  render() {
    const {role, defaultLocation, redirect } = this.state
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

  if(redirect) return <Redirect to={`/facilitators`}/>

    return (
      <form onSubmit={(e) =>{
        e.preventDefault()
        this.submitForm()
      }}>

        <input placeholder="First Name" type="text" name="firstName" onChange={this.handleFacilitatorChange} value={this.state.value} required />

        <input placeholder="Last Name" type="text" name="lastName" onChange={this.handleFacilitatorChange} value={this.state.value} required />

        <input placeholder="Email" type="text" name="email" onChange={this.handleFacilitatorChange} value={this.state.value} required />

        <input placeholder="Address" type="text" name="address" onChange={this.handleFacilitatorChange} value={this.state.value} required />

        <input placeholder="Mobile Number" type="text" name="contact_no" onChange={this.handleFacilitatorChange} value={this.state.value} required />

        <SingleSelect
          name="role"
          placeholder="Role"
          simpleValue
          value={role}
          onChange={this.changeRole}
          options={[
            {value: "Lead Facilitator", label: "Lead Facilitator"},
            {value: "Assistant Facilitator", label: "Assistant Facilitator"},
            {value: "Administrator", label: "Administrator"},
          ]
          }
          />
        <SingleSelect
          name="defaultLocation"
          placeholder="Default Location"
          simpleValue
          value={defaultLocation}
          onChange={this.changeLocation}
          options={[
            {value: "Melbourne", label: "Melbourne"},
            {value: "Sydney", label: "Sydney"},
            {value: "Brisbane", label: "Brisbane"},
          ]
          }
          />

        <button type="submit" value="Submit">Submit</button>

      </form>
    )
  }
}

export default NewFacilitatorForm