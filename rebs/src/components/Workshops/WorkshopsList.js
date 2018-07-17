import React, { Component } from 'react';
import WorkshopsCard from './WorkshopsCard';

class WorkshopsList extends Component {

    componentDidMount(){
        this.props.updateHeaderTitle("View Workshops");
    }

  render() {

    return (
        <div className="workshopsList">
        <WorkshopsCard/>
        </div>
    );
  }
}

export default WorkshopsList;