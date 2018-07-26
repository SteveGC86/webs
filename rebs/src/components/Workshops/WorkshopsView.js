import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class WorkshopsView extends Component {


  render() {
    const singleWorkshop = this.props.location.state.singleWorkshop
    return (
      <div key={singleWorkshop._id} className="workshopsView">
        <h2>{singleWorkshop.workshop_name}</h2><br/>
        <div className="skills">
          <ul>{singleWorkshop.skills_required.map(skill => {
                return <li key={skill._id}>{skill}</li>
              })}
          </ul>
        </div>
        <Link to={{
          pathname: `/workshops/${singleWorkshop._id}/edit`,
          state: { singleWorkshop }
        }}>
          <button className="edit-button">Edit</button>
        </Link>
      </div>
    );
  }
}

export default WorkshopsView;