import React from 'react';


class RoomNew extends React.Component {
    
  render(){
    return (
      <div id="newRoom">
      <h3>New Room</h3>
        <input placeholder="Room Name" type="text" name="room" />
        
      </div>
    )
  }
}

export default RoomNew
