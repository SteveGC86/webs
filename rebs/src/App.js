import React, { Component } from 'react';
import EventEdit from './components/Events/EventEdit'
import EventList from './components/Events/EventList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <EventEdit /> */}
       <EventList />
      </div>
    );
  }
}

export default App;
