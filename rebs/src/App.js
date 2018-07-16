import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';


// IMPORT COMPONENTS
import FetchEvent from './components/Events/FetchEvent'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import EventEdit from './components/Events/EventEdit';
import EventView from './components/Events/EventView';
import { NewEventForm } from './components/Events/EventNew'
// import { Title, Status, DateFrom, DateTo, Onsite, Location, Organisation, Attendees } from './components/Events/EventView'
import LoginForm from'./components/Login/LoginForm';
import EventList from './components/Events/EventList'


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
    console.log(title)
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
            <Route exact path="/" render={() => {
                return <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>
              }}/> 
              <Route exact path="/events" render={() => {
                return <EventEdit updateHeaderTitle={this.updateHeaderTitle}/>
              }}/> 
              <Route exact path="/events/:id/edit" render={() => {
                return <EventEdit updateHeaderTitle={this.updateHeaderTitle} state={this.state}/>
              }}/> 
              <Route path="/events/new" component={EventEdit}/>
              <Route exact path="/facilitators" component={EventEdit}/>
              <Route exact path="/facilitators/:id" component={EventEdit}/>
              <Route path="/facilitators/:id/edit" component={EventEdit}/>
              <Route path="/facilitators/new" component={EventEdit}/>
              <Route exact path="/organisations" component={EventEdit}/>
              <Route exact path="/organisations/:id" component={EventEdit}/>
              <Route path="/organisations/:id/edit" component={EventEdit}/>
              <Route path="/organisations/new" component={EventEdit}/>
              <Route exact path="/workshops" component={EventEdit}/>
              <Route exact path="/workshops/:id" component={EventEdit}/>
              <Route path="/workshops/:id/edit" component={EventEdit}/>
              <Route path="/workshops/new" component={EventEdit}/>
              <Route path="/settings" component={EventEdit}/>
            </Switch>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
