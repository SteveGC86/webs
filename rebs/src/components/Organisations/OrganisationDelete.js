import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'


class OrganisationDelete extends Component {

    state = {
        redirect: false,
    }

    deleteOrganisation(organisation){
        const url = `${process.env.REACT_APP_API_URI}/organisations/${organisation._id}`
        axios.delete(url)
        .then(()=>{
            this.setState({ redirect: true})
        })
    }

    cancel(){
      this.setState({redirect: true})
  }
  
  render(){
    const singleOrg = this.props.location.state.singleOrg
    console.log(singleOrg)

    if(this.state.redirect){
        return <Redirect to={`/organisations`}/>
    }
    return (
      <div className="eventDelete">
      <h3>
          Are you sure you want to delete this organisation?
      </h3><br/>
      
          <button className="delete-button" onClick={() => {this.deleteOrganisation(singleOrg)}}>Delete</button>
        
          <button className="edit-button" onClick={() => {this.cancel()}}>Cancel</button>
      <br/><br/>
        <h2>{singleOrg.org_name}</h2>

        <div className="wrapper">
          <h3>Contact Name:</h3>
          <p>{singleOrg.contact_name}</p><br/>
          <h3>Contact Number:</h3>
          <p>{singleOrg.contact_no}</p><br/>
          <h3>Contact Email:</h3>
          <p>{singleOrg.contact_email}</p><br/>
            <h3>Locations:</h3>
            {singleOrg.locations.map((location, i) => {
                return <div key={location._id}>
                <h4>{location.street_add}, {location.suburb}</h4>
                <p>{location.state}, {location.pcode}</p><br/>

                <h5>Rooms for {location.street_add}:</h5>
                <ul>
                 {location.rooms.map(room => {
                    return <li key={room._id}>{room.room}</li>
                })}   
                </ul><br/>
                </div>
            })}

        </div>
      </div>
    )
  }
}

export default OrganisationDelete