import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Settings extends Component {

    componentDidMount(){
        this.props.updateHeaderTitle("Settings");
    }

  render() {

    return (
        <div className="settings">
        <Link to={'/workshops'}><button>View Workshops</button></Link>
        <Link to={'/facilitators'}><button>View Facilitators</button></Link>
        </div>
    );
  }
}

export default Settings;