import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Popup from "reactjs-popup";
import './Navbar.css';



class Navbar extends Component {
  render() {

    return (
        <div className="Navbar">

        {/* Events Link with Popup */}
            <Popup
            trigger={<p><FontAwesome name="calendar-alt"/></p>}
            position="top left"
            on="click"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0px", border: "none" }}
            arrow={false}
            >
            <div className="menu">
                <Link to="/events"><p>View All</p></Link>
                <Link to="/events/new"><p>New Event</p></Link>
            </div>
            </Popup>

        {/* Facilitators Link with Popup */}
            <Popup
            trigger={<p><FontAwesome name="users"/></p>}
            position="top left"
            on="click"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0px", border: "none" }}
            arrow={false}
            >
            <div className="menu">
                <Link to="/facilitators"><p>View All</p></Link>
                <Link to="/facilitators/new"><p>New Facilitator</p></Link>
            </div>
            </Popup>

        {/* New Event Link */}
        <Link to="/events/new" id="blue-circle"><FontAwesome name="plus"/></Link>

        {/* Organisations Link with Popup */}
            <Popup
            trigger={<p><FontAwesome name="university"/></p>}
            position="top right"
            on="click"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0px", border: "none" }}
            arrow={false}
            >
            <div className="menu">
                <Link to="/orginisations"><p>View All</p></Link>
                <Link to="/orginisations/new"><p>New Organisation</p></Link>
            </div>
            </Popup>

        {/* Settings Link */}
        <Link to="/settings"><FontAwesome name="cog"/></Link>

        </div>
    );
  }
}

export default Navbar;
