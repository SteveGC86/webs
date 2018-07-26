import React, { Component } from 'react';
import WorkshopsCard from './WorkshopsCard';

class WorkshopsList extends Component {
    state = {
      workshops: null,
    }

    componentDidMount(){
        this.props.updateHeaderTitle("View Workshops");
        fetch(`${process.env.REACT_APP_API_URI}/workshops`)
        .then(res => res.json())
        .then(workshops => {
          this.setState({ 
            workshops
          })
        })
    }

  render() {
    const workshops = this.state.workshops
    if(!workshops){
      return <h1>Loading...</h1>
    }
    return (
        <div className="container">
          <div className="fetch">
            {workshops.map(singleWorkshop => {
              return <WorkshopsCard key={singleWorkshop._id}
              singleWorkshop={singleWorkshop}
              />
            })
            }
          </div>
        </div>
    );
  }
}

export default WorkshopsList;