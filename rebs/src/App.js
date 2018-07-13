import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';

// IMPORT COMPONENTS
import Navbar from './components/Navbar/Navbar'


class App extends Component {

  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
