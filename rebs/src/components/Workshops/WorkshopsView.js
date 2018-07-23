import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class WorkshopsView extends Component {


  render() {
    const singleWorkshop = this.props.location.state.singleWorkshop
    console.log(singleWorkshop)
    return (
        <div className="workshopsView">
        <h2>{singleWorkshop.title}</h2>
        <div className="skills">
          <ul>
            
              {singleWorkshop.skills.map(skill => {
                return<li key={singleWorkshop._id}><p>{skill}</p></li>
              })}
            

            <Link to={{
          pathname: `/workshops/${singleWorkshop._id}/edit`,
          state: { singleWorkshop }
        }}>
          <button className="edit-button">Edit</button>
        </Link>
          </ul>
        </div>
        </div>
    );
  }
}

export default WorkshopsView;