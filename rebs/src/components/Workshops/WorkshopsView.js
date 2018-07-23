import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class WorkshopsView extends Component {

  render() {
    const singleWorkshop = this.props.singleWorkshop
    return (
        <div className="workshopsView">
        View single workshop.
        </div>
    );
  }
}

export default WorkshopsView;