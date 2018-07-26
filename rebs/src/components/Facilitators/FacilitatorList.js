import React, { Component } from 'react';
import FacilitatorCard from './FacilitatorCard';
 
// EventCard FacilitatorCard  FacilitatorList FacilitatorList


class FacilitatorList extends Component {
    state = {
        users: null,
    }
    
    
    componentDidMount(){
        this.props.updateHeaderTitle("Facilitators");
      
        fetch(`${process.env.REACT_APP_API_URI}/users`)
        .then(res => res.json())
        .then(users => {
            this.setState({
                users
        })
        
    })
    }

  render() {

    const users = this.state.users
    if(!users){
        return <h1>Loading...</h1>
    }
    return (
        <div className="container">
            <div className="fetch">
            {/* <input type="button" value="Calender View" name="viewCalender" /> */}
                {
                    users.map(singleFacilitator => {
                    return <FacilitatorCard key={singleFacilitator._id} singleFacilitator={singleFacilitator}
                    />
                }) 
                }
            </div>
        </div>
    );
  }
}

export default FacilitatorList;