import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import { NewEventForm } from './components/Events/EventNew'
import { Title, Status, DateFrom, DateTo, Onsite, Location, Organisation, Attendees } from './components/Events/EventView'
import { NewFacilitatorForm } from '.components/Events/FacilitatorNew'

// IMPORT COMPONENTS
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import EventEdit from './components/Events/EventEdit';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Header/>
       <EventEdit />

        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
