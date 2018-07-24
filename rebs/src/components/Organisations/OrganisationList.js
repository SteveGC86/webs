import React, { Component } from 'react';
import OrganisationCard from './OrganisationCard';

class OrganisationsList extends Component {
    state = {
        organisations: null,
    }

    componentDidMount(){
        this.props.updateHeaderTitle("Organisations");
        fetch(`${process.env.REACT_APP_API_URI}/organisations`)
        .then(res => res.json())
        .then(organisations => {
            this.setState({
                organisations
        })
        
    })
    }

  render() {

    const organisations = this.state.organisations
    if(!organisations){
        return <h1>Loading...</h1>
    }
    return (
        <div className="container">
            <div className="fetch">
                {
                organisations.map(singleOrg => {
                    return <OrganisationCard key={singleOrg._id} singleOrg={singleOrg}
                    />
                }) 
                }
            </div>
        </div>
    );
  }
}

export default OrganisationsList;