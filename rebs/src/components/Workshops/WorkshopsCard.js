import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

class WorkshopCard extends React.Component {

  render() {
    const singleWorkshop = this.props.singleWorkshop
    console.log(singleWorkshop);
    return(
      <div key={singleWorkshop._id} className="eventWorkshop">
        <h3>{singleWorkshop.workshop_name}</h3>
      

      <div className="eventCard">
        <h5>{singleWorkshop.skills_required.map(skill => {          
          return <p key={skill._id}> 
          {skill}<br/></p>
        })}</h5>
      </div>
      <div>
        <Link Key={singleWorkshop._id}
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