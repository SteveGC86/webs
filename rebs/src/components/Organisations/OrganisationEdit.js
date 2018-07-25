import React from 'react';
import { Redirect } from 'react-router-dom';
// import Select from 'react-select'
// import 'react-select/dist/react-select.css'
// import DateTimePicker from 'material-ui-pickers/DateTimePicker';
// import styled from 'styled-components';
import axios from 'axios';
import LocationNew from './LocationNew';


class OrganisationEdit extends React.Component {
  state = {
    redirect: false,
    locationRender: false,
    roomRender: false,
    org_name: null,
    contact_name:null, 
    contact_no:null,
    contact_email: null,
    rooms: null,
    street_add: null,
    suburb: null,
    state:null,
    pcode: null,
  }
    

  //Handle info functions
  handleChange(e) {
    const singleOrg = this.props.location.state.singleOrg                                                
    const url = `${process.env.REACT_APP_API_URI}/organisations/${singleOrg._id}`
    const data = {
      "org_name": e.target.org_name.value,
      "contact_name": e.target.contact_name.value,
      "contact_no": e.target.contact_no.value,
      "contact_email": e.target.contact_email.value,
      "locations": singleOrg.locations.map(location => {
        return {
          "rooms": location.rooms.map(room => {
            return {
              "_id": room._id,
              "room": room.room
            }
          }),
          "_id": location._id,
          "street_add": location.street_add,
          "suburb": location.suburb,
          "state": location.state,
          "pcode": location.pcode,
          "longitude": 0,
          "latitude": 0
          }
      })
    }
    // console.log(singleOrg)
    // console.log(data)

    axios.patch(url, data)
    .then(this.setState({redirect: true}))
    .catch(err => console.log(err.message))
  }

  componentDidMount(){
                                                          
  }
 
  
  render(){
    const { redirect } = this.state
    const singleOrg = this.props.location.state.singleOrg
    console.log(singleOrg)

    if(redirect) return <Redirect to={`/organisations`}/>

    return (
      <form id="newOrganisationForm" onSubmit={(e) => {
        e.preventDefault();
        this.handleChange(e)
      }}>
      <h3>New Organisation</h3><br/>
        <input placeholder="Organisation Name" type="text" name="org_name" onChange={this.changeOrgName} defaultValue={singleOrg.org_name}/>
        <input placeholder="Contact Name" type="text" name="contact_name" defaultValue={singleOrg.contact_name}/>
        <input placeholder="Contact Number" type="text" name="contact_no" defaultValue={singleOrg.contact_no}/>
        <input placeholder="Contact Email" type="text" name="contact_email" defaultValue={singleOrg.contact_email}/>

        <button type="submit">Submit</button>
        
      </form>
      )
  }
}

export default OrganisationEdit
