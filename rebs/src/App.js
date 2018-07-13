import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';

// IMPORT COMPONENTS
import Navbar from './components/Navbar/Navbar';
import EventEdit from './components/Events/EventEdit';


class App extends Component {

  render() {
    return (
      <div className="App">
       <EventEdit />

        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
