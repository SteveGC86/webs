import React, { Component } from 'react';

class NewWorkshop extends Component {

    componentDidMount(){
        this.props.updateHeaderTitle("New Workshop");
    }

  render() {

    return (
        <div className="newWorkshop">
        New Workshop
        </div>
    );
  }
}

export default NewWorkshop;