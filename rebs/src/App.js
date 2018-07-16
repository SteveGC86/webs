import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';


// IMPORT LAYOUT COMPONENTS
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import LoginForm from'./components/Login/LoginForm';

// IMPORT EVENT COMPONENTS
import EventEdit from './components/Events/EventEdit';
import EventView from './components/Events/EventView';
import EventList from './components/Events/EventList';
import NewEventForm from './components/Events/EventNew';

// IMPORT OTHER COMPONENTS
import Settings from './components/Settings/Settings';

// IMPORT WORKSHOPS COMPONENTS
import WorkshopsNew from './components/Workshops/WorkshopsNew';
import WorkshopsList from './components/Workshops/WorkshopsList';
import WorkshopsEdit from './components/Workshops/WorkshopsEdit';
import WorkshopsView from './components/Workshops/WorkshopsView';



class App extends Component {
  state = {
    title: 'Redhill Education WEBS',
    isLoggedIn: false,
    isAdmin: false,
  }

  updateHeaderTitle = (title) => {
    this.setState({
      title
    })
  }

  handleLoginSubmit = (email) => {
    const url = 'http://localhost:3000/login';
    const email_address = {email_address: email};

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(email_address), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title}/>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
              {/* Login Form */}
              <Route exact path="/" render={() => {
                return <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>
              }}/> 
              {/* View All Events */}
              <Route exact path="/events" render={() => {
                return <EventList updateHeaderTitle={this.updateHeaderTitle}/>
              }}/> 
              {/* View Single Event */}
              <Route exact path="/events/:id/" component={EventView}/> 
              {/* Edit Event */}
              <Route exact path="/events/:id/edit" component={EventEdit}/>
              {/* Add New Event */}
              <Route exact path="/events/new" render={() => {
                return <NewEventForm updateHeaderTitle={this.updateHeaderTitle}/>        
              }}/> 
              {/* <Route exact path="/facilitators" component={EventEdit}/>
              <Route exact path="/facilitators/:id" component={EventEdit}/>
              <Route path="/facilitators/:id/edit" component={EventEdit}/>
              <Route path="/facilitators/new" component={EventEdit}/>
              <Route exact path="/organisations" component={EventEdit}/>
              <Route exact path="/organisations/:id" component={EventEdit}/>
              <Route path="/organisations/:id/edit" component={EventEdit}/>
              <Route path="/organisations/new" component={EventEdit}/> */}

              {/* List All Workshops w/ Workshops Card*/}
              <Route exact path="/workshops" render={() => {
                return <WorkshopsList updateHeaderTitle={this.updateHeaderTitle}/>        
              }}/>
              {/* View Single Workshop */}
              <Route exact path="/workshops/:id" render={() => {
                return <WorkshopsView updateHeaderTitle={this.updateHeaderTitle}/>        
              }}/>
              {/* Edit Single Workshop */}
              <Route path="/workshops/:id/edit" render={() => {
                return <WorkshopsEdit updateHeaderTitle={this.updateHeaderTitle}/>        
              }}/>
              {/* Add New Workshop */}
              <Route path="/workshops/new" render={() => {
                return <WorkshopsNew updateHeaderTitle={this.updateHeaderTitle}/>        
              }}/>
              {/* Settings Page */}
              <Route exact path="/settings" render={() => {
                return <Settings updateHeaderTitle={this.updateHeaderTitle}/>        
              }}/> 
            </Switch>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
