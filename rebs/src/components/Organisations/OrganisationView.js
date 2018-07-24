import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class OrganisationView extends Component {
  
  render(){
    const singleOrg = this.props.location.state.singleOrg
    console.log(singleOrg)
    return (
      <div className="eventView">
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
        

        <Link to={{
          pathname: `/organisations/${singleOrg._id}/edit`,
          state: { singleOrg }
        }}>
          <button className="edit-button">Edit</button>
        </Link>
        <Link to={{
          pathname: `/organisations/${singleOrg._id}/delete`,
          state: { singleOrg }
        }}>
          <button className="delete-button">Delete</button>
        </Link>
        <Link to={'/organisations'}><button>Back</button></Link>
      </div>
    )
  }
}

export default OrganisationView