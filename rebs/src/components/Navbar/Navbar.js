import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
    <Link to="/events"><FontAwesome name="calendar-alt"/></Link>
    <Link to="/facilitators"><FontAwesome name="users"/></Link>
    <Link to="/events/new" id="blue-circle"><FontAwesome name="plus"/></Link>
    <Link to="/organisations"><FontAwesome name="university"/></Link>
    <Link to="/settings"><FontAwesome name="cog"/></Link>
      </div>
    );
  }
}

export default Navbar;
