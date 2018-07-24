import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LocationNew from './LocationNew';


class NewOrganisationForm extends React.Component {
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
  handleChange = (e) => {                                                       
    const url = `${process.env.REACT_APP_API_URI}/organisations/new`
    // axios.post(url, {
    //     org_name: e.target.org_name.value,
    //     contact_name: e.target.contact_name.value,
    //     contact_no: e.target.contact_no.value,
    //     contact_email: e.target.contact_email.value,
    //     locations: [
    //         {
    //         rooms: e.target.room.value,
    //         street_add: e.target.street_add.value,
    //         suburb: e.target.suburb.value,
    //         state: e.target.state.value,
    //         pcode: e.target.pcode.value
    //         }
    //     ]
    // })


    axios.post(url, {
        "org_name": e.target.org_name.value,
        "contact_name": e.target.contact_name.value,
        "contact_no": e.target.contact_no.value,
        "contact_email": e.target.contact_email.value,
        "locations": [
            {
            "rooms": [
                {
                "room": e.target.room.value
                }
            ],
            "street_add": e.target.street_add.value,
            "suburb": e.target.suburb.value,
            "state": e.target.state.value,
            "pcode": e.target.pcode.value
            }]
        })

    .then(this.setState({redirect: true}))
    .catch(err => console.log(err.message))
  }

  componentDidMount(){
    this.props.updateHeaderTitle("New Organisation");                                                       
  }

  locationRender = () => {
      if(this.state.locationRender){
          this.setState({locationRender: false})
      } else this.setState({locationRender: true})
  }
    
  render(){
      const { locationRender, redirect } = this.state
      if(redirect) return <Redirect to={`/organisations`}/>
      let locationDiv = '';
      if(locationRender){
          locationDiv = <LocationNew/>
      } else {
          locationDiv = '';
      }
    return (
      <form id="newOrganisationForm" onSubmit={(e) => {
        e.preventDefault();
        this.handleChange(e)
      }}>
      <h3>New Organisation</h3><br/>
        <input placeholder="Organisation Name" type="text" name="org_name" onChange={this.changeOrgName}/>
        <input placeholder="Contact Name" type="text" name="contact_name" />
        <input placeholder="Contact Number" type="text" name="contact_no" />
        <input placeholder="Contact Email" type="text" name="contact_email" />
        <button onClick={(e) => {
            e.preventDefault() 
            this.locationRender()}
        }>Add New Location</button><br/>
        {locationDiv}

        <button type="submit">Submit</button>
        
      </form>
    )
  }
}

export default NewOrganisationForm
