import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import ShowCalendar from '../Calendar/ShowCalendar'

// EventView FacilitatorView

class FacilitatorView extends Component {

  render() {
    const singleFacilitator = this.props.location.state.singleFacilitator
    console.log(singleFacilitator)
    return (
      <div className="eventView">
        <h3>{singleFacilitator.email}</h3>
        <h2>{singleFacilitator.f_name}</h2>
        <p>{singleFacilitator.l_name}</p>
      
        <Link to={{
          pathname: `/facilitators/${singleFacilitator._id}/edit`,
          state: { singleFacilitator }
        }}>
          <button className="edit-button">Edit</button>
        </Link>

        


        <div className="wrapper">
        {singleFacilitator.skills.map(skill => {
                return <p key={skill._id}> 
                <h5>{(skill.skill)}</h5>
                </p>
                })} 
          <h3>Role:</h3>
          <p>{singleFacilitator.role}</p><br />
          <h4>Default Location:</h4>
          <p>{singleFacilitator.default_location}</p><br />
        </div>

        <div className="wrapper">
          <h3>contact_no:</h3>
          <p>{singleFacilitator.contact_no}</p>
        </div>
        <Link to={'/facilitators'}><button>Back</button></Link>
      </div>
    )
  }
}

export default FacilitatorView