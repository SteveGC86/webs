import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import styled from 'styled-components';


class FacilitatorEdit extends Component {

  state = {
    redirect: false,
    selectedSkills: ''
  }

  handleChange = (e) => {

    const user_id = this.props.location.state.singleFacilitator._id
    const url = `${process.env.REACT_APP_API_URI}/users/${user_id}`
    
    // console.log(this.state.selectedSkills)
     
    // const skillsArrayOfStrings = this.state.selectedSkills.split(",")
    
   
    const data = {
      "_id": user_id,
      "email": e.target.email.value,
      "f_name": e.target.f_name.value,
      "l_name": e.target.l_name.value,
      "role": e.target.role.value,
      "contact_no": e.target.contact_no.value,
      "default_location": e.target.default_location.value,
      "skills": this.state.selectedSkills
    }

    console.log(data)
    // ["VBA", "ReactJS", "MongoDb"]
    axios.patch(url, data)
      .then((res) => {
        // console.log(res.data.email);
        // console.log(res.data);
        this.setState({ redirect: true })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  skillSelect = (skill) => {
    this.setState({ selectedSkills: skill.map(s => {
      return s.value
    }) })
    // console.log(skill)
  }

  componentDidMount() {
    const singleFacilitator = this.props.location.state.singleFacilitator
 
    const skills = singleFacilitator.skills
    console.log('skills', skills)
  
    this.setState({
      email: singleFacilitator.email,
      f_name: singleFacilitator.f_name,
      l_name: singleFacilitator.l_name,
      role: singleFacilitator.role,
      contact_no: singleFacilitator.contact_no,
      default_location: singleFacilitator.default_location,
      selectedSkills: skills
    })

  }


  render() {
    const singleFacilitator = this.props.location.state.singleFacilitator
    const { redirect, selectedSkills } = this.state;


    const MultiSelect = styled(Select)`
    &.Select--multi  {
      width:70vw;
      margin: 0 15vw 3vh 15vw;
      font-size: 3vh;
    }
    @media (min-width: 1000px){
      &.Select--multi  {
        width:40vw;
        margin: 0 30vw 3vh 30vw;
        font-size: 3vh;
      }
    }
  `
    if (redirect) {
      return <Redirect to={{
        pathname: `/facilitators`,
        state: { singleFacilitator: singleFacilitator }
      }} />
    }
    return (
      <div className="eventEdit">
        <h3>Edit Facilitator</h3><br /><br />
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleChange(e)
        }}>
        {/* simpleValue joinValues */}
          <MultiSelect
            multi
            joinValues
            delimiter={','}
            name="skill"
            value={selectedSkills}
            onChange={this.skillSelect}
            options={[
              { value: 'Ruby on Rails', label: 'Ruby on Rails' },
              { value: 'JavaScript', label: 'JavaScript' },
              { value: 'ReactJS', label: 'ReactJS' },
              { value: 'ASP', label: 'ASP' },
              { value: 'VBA', label: 'VBA' },
              { value: 'MongoDb', label: 'MongoDb' }
            ]}
          />


          <br />
          <input type="text" ref={this.email} placeholder="email" defaultValue={singleFacilitator.email} name="email" required /><br />
          <br />
          <input type="text" ref={this.f_name} placeholder="f_name" defaultValue={singleFacilitator.f_name} name="f_name" required /><br />
          <br />
          <input type="text" ref={this.l_name} placeholder="l_name" defaultValue={singleFacilitator.l_name} name="l_name" required /><br />
          <br />
          <div className="onsite" >
            <p>Availability</p>
            <input type="checkbox" defaultChecked={singleFacilitator.availability ? true : false} name="availability" />
          </div>
          <input type="text" ref={this.role} placeholder="role" defaultValue={singleFacilitator.role} name="role" required /><br />
          <br />
          <input type="text" ref={this.contact_no} placeholder="contact_no" defaultValue={singleFacilitator.contact_no} name="contact_no" required /><br />
          <br />
          <input type="text" ref={this.default_location} placeholder="default_location" defaultValue={singleFacilitator.default_location} name="default_location" required /><br />
          <br />

          <br />

          <button value="submit">Submit</button>

        </form>

      </div>
    )
  }
}


export default FacilitatorEdit