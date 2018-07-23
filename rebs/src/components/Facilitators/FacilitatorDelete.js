import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class FacilitatorDelete extends Component {

    state = {
        redirect: false,
    }

    deleteFacilitator(user){
        const url = `${process.env.REACT_APP_API_URI}/users/${user._id}`
        axios.delete(url)
        .then(()=>{
            this.setState({ redirect: true})
        })
    }

    cancel(){
        this.setState({redirect: true})
    }
  
  render(){
    const facilitator = this.props.location.state.singleFacilitator
    console.log(facilitator)

    if(this.state.redirect){
        return <Redirect to={`/facilitators`}/>
    }
    return (
      <div className="facilitatorDelete">
      <h3>
          Are you sure you want to delete the below facilitator?
      </h3>
      
          <button className="delete-button" onClick={() => {this.deleteFacilitator(facilitator)}}>Delete Facilitator</button>
          
          <button className="edit-button" onClick={() => {this.cancel}}>Cancel</button>

        <h2>{facilitator.f_name} {facilitator.l_name}</h2>
        <p>{facilitator.role}</p>
        <h4>Contact Number:</h4>
          <p>{facilitator.contact_no}</p><br/>
          <h4>Contact Email:</h4>
          <p>{facilitator.email}</p><br />
        </div>
    )
  }
}

export default FacilitatorDelete