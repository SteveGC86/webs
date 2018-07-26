import React from 'react';
// import { Redirect } from 'react-router-dom';
// import Select from 'react-select'
// import 'react-select/dist/react-select.css'
// import DateTimePicker from 'material-ui-pickers/DateTimePicker';
// import styled from 'styled-components';
import axios from 'axios';


class OrganisationEdit extends React.Component {
  state = {
    redirect: false,
  }
    

  //Handle info functions
  handleChange(e) {                                                       
    const url = `${process.env.REACT_APP_API_URI}/organisations`
    axios.post(url, { 
        org_name: e.target.org_name.value,
        contact_name: e.target.contact_name.value,
        contact_no: e.target.contact_no.value,
        contact_email: e.target.contact_email.value,
    })

    .then(this.setState({redirect: true}))
    .catch(err => console.log(err.message))
  }

  componentDidMount(){
    // this.props.updateHeaderTitle("New Organisation");                                                       
  }
    
  render(){
    return (
      <form id="newOrganisatoinForm" onSubmit={(e) => {
        e.preventDefault();
        this.handleChange(e)
      }}>
        <p>
        <input placeholder="Organisation Name" type="text" name="org_name" />
        </p>
        <p>
        <input placeholder="Contact Name" type="text" name="contact_name" />
        </p>
        <p>
        <input placeholder="Contact Number" type="text" name="contact_no" />
        </p>
        <p>
        <input placeholder="Contact Email" type="text" name="contact_email" />
        </p>

        

        <p><button type="submit">Submit</button></p>
        
      </form>
    )
  }
}

export default OrganisationEdit
