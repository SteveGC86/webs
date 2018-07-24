import React from 'react';
import RoomNew from './RoomNew';

class LocationNew extends React.Component {
    state = {
        roomRender: false,
    }

    roomRender = () => {
        if(this.state.roomRender){
            this.setState({roomRender: false})
        } else this.setState({roomRender: true})
    }

  render(){
    const { roomRender } = this.state
    let roomDiv = '';
    if(roomRender){
        roomDiv = <RoomNew/>
    } else {
        roomDiv = '';
    }
    return (
      <div id="newLocation">
      <h3>New Location</h3><br/>
    
        <input placeholder="Street Address" type="text" name="street_add"/>
        <input placeholder="Suburb" type="text" name="suburb" />
        <input placeholder="State" type="text" name="state" />
        <input placeholder="Postcode" type="text" name="pcode" />
        <button onClick={(e) => {
            e.preventDefault()
            this.roomRender()}
            }>Add New Room</button>
        {roomDiv}
        
      </div>
    )
  }
}

export default LocationNew
