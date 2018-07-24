import React from 'react';
import { Link } from 'react-router-dom';


// EventCard FacilitatorCard
class FacilitatorCard extends React.Component {

  render() {
    const singleFacilitator = this.props.singleFacilitator
    return (
      <div key={singleFacilitator._id} className="eventCard" >
        <div className="eventName">
          <h3>{singleFacilitator.f_name} {singleFacilitator.l_name}</h3>
        </div>

        <div className="eventDetails">
          <div>
            <p>{singleFacilitator.role}</p>
            <p>{singleFacilitator.default_location}</p>
            {/* {singleFacilitator.skills.map(skill => {
              return <p key={skill._id}>
                <h5>{(skill.skill)}</h5>
              </p>
            })} */}
          </div>
          <div>
            
            <Link key={singleFacilitator._id}
              to={
                {
                  pathname: `/facilitators/${singleFacilitator._id}/`,
                  state: { singleFacilitator }
                }
              }>
              <button className="viewButton" name="viewEvent">View</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default FacilitatorCard
