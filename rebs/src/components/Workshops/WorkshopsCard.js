import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

class WorkshopCard extends React.Component {

  render() {
    const singleWorkshop = this.props.singleWorkshop
    return(
      <div key={singleWorkshop._id} className="eventCard">
        <h3>{singleWorkshop.workshop_name}</h3>
      

      <div className="workshopDetails">
      <p>
        {singleWorkshop.skills_required.map(skill => {
          return `${skill} `
        })}
      </p>
      </div>
      <div>
        <Link key={singleWorkshop._id}
          to={
              { 
                pathname: `/workshops/${singleWorkshop._id}/`,
                state: { singleWorkshop }
              }
          }>
        <button className="viewButton" name="viewEvent">View</button>
        </Link>
      </div>
      </div>
    )
  }
}

export default WorkshopCard