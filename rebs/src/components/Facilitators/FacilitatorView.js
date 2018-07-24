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
        <h2>{singleFacilitator.f_name} {singleFacilitator.l_name}</h2>

        <h3>{singleFacilitator.role}</h3>
        <h4>{singleFacilitator.default_location}</h4><br/>
      
      
      <div className="wrapper">
        <h4>Skills:</h4> <ul>
          {singleFacilitator.skills.map(skill => {
          return <li key={skill._id}>{(skill.skill)}</li>
          })}
        </ul> <br/>

          <h4>Contact Number:</h4>
          <p>{singleFacilitator.contact_no}</p><br/>
          <h4>Contact Email:</h4>
          <p>{singleFacilitator.email}</p><br />
          <h4>Availability:</h4>
          <p>{singleFacilitator.availability}</p><br />
        </div>
        <Link to={{
          pathname: `/facilitators/${singleFacilitator._id}/edit`,
          state: { singleFacilitator }
        }}>
          <button className="edit-button">Edit</button>
        </Link>
        <Link to={{
          pathname: `/facilitators/${singleFacilitator._id}/delete`,
          state: { singleFacilitator }
        }}>
          <button className="delete-button">Delete</button>
        </Link><br/>
        <Link to={'/facilitators'}><button>Back</button></Link>
      </div>
    )
  }
}

export default FacilitatorView