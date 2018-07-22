import React from 'react';
import { Link } from 'react-router-dom';


// EventCard FacilitatorCard
class FacilitatorCard extends React.Component {

  render() {
    const singleFacilitator = this.props.singleFacilitator
    return (
      <div key={singleFacilitator._id} className="eventCard" >
        <div className="eventName">

        </div>

        <div className="eventDetails">
          <div>
            <h3>{singleFacilitator.email}</h3>
            <h3>{singleFacilitator.f_name} {singleFacilitator.l_name}</h3>

            {/* {singleFacilitator.skills.map(skill => {
              return <p key={skill._id}>
                <h5>{(skill.skill)}</h5>
              </p>
            })} */}
          </div>
          <div>
            <p>{singleFacilitator.contact_no}</p>
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
