import React from 'react';
import {Link} from 'react-router-dom';

class OrganisationCard extends React.Component {

  render() {
    const singleOrg = this.props.singleOrg
    return(
    <div key={singleOrg._id} className="eventCard" >
      <div className="eventName">
        <h3>{singleOrg.org_name}</h3>
      </div>

      <div className="eventDetails">
        <div>
          <p>{singleOrg.contact_name}</p>
          <p>{singleOrg.contact_email}</p>
        </div>
        <div>
          
          <Link key={singleOrg._id} 
            to={
                {
                    pathname: `/organisations/${singleOrg._id}/`,
                    state: { singleOrg }
                }
            }> 
              <button className="viewButton" name="viewOrganisation">View</button>
          </Link>
        </div>
      </div>
    </div>
    )}
}

export default OrganisationCard
