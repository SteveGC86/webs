import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
// import 'material-ui'




// IMPORT LAYOUT COMPONENTS
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

// IMPORT EVENT COMPONENTS
import EventEdit from './components/Events/EventEdit';
import EventView from './components/Events/EventView';
import EventList from './components/Events/EventList';
import NewEventForm from './components/Events/EventNew';
import EventDelete from './components/Events/EventDelete';

// IMPORT OTHER COMPONENTS
import Settings from './components/Settings/Settings';
import ComingSoon from './components/ComingSoon';
import LoginForm from'./components/Login/LoginForm';

// IMPORT WORKSHOPS COMPONENTS
import WorkshopsNew from './components/Workshops/WorkshopsNew';
import WorkshopsList from './components/Workshops/WorkshopsList';
import WorkshopsEdit from './components/Workshops/WorkshopsEdit';
import WorkshopsView from './components/Workshops/WorkshopsView';

// IMPORT FACILITATOR COMPONENTS
import FacilitatorList from './components/Facilitators/FacilitatorList';
import FacilitatorView from './components/Facilitators/FacilitatorView';
import NewFacilitatorForm from './components/Facilitators/FacilitatorNew';
import FacilitatorDelete from './components/Facilitators/FacilitatorDelete';

// IMPORT ORGANISATIONS COMPONENTS
import OrganisationList from './components/Organisations/OrganisationList';
import OrganisationView from './components/Organisations/OrganisationView';
import NewOrganisationForm from './components/Organisations/OrganisationNew';
import OrganisationDelete from './components/Organisations/OrganisationDelete';
import OrganisationEdit from './components/Organisations/OrganisationEdit';

require('dotenv').config()
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
          <MuiPickersUtilsProvider utils={MomentUtils}>
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
                <Route exact strict path="/events" render={() => {
                return <EventList updateHeaderTitle={this.updateHeaderTitle}/>
                }}/> 

                {/* Edit Event */}
                <Route exact strict path="/events/:id/edit" component={EventEdit}/>

                {/* View Single Event */}
                <Route exact strict path="/events/:id/" component={EventView}/> 

                {/* Add New Event */}
                <Route path="/events/new" render={() => {
                return <NewEventForm updateHeaderTitle={this.updateHeaderTitle}/>        
                }}/> 

                {/* Delete Single Event */}
                <Route exact strict path="/events/:id/delete" component={EventDelete}/> 

                {/* View All Facilitators */}
                <Route exact strict path="/facilitators" render={() => {
                  return <FacilitatorList updateHeaderTitle={this.updateHeaderTitle} />
                }} />

                {/* View Single Facilitator */}
                <Route exact strict path="/facilitators/:id/" component={FacilitatorView} />

                {/* Delete Single Facilitator */}
                <Route exact strict path="/facilitators/:id/delete" component={FacilitatorDelete} />

                <Route path="/facilitators/:id/edit" component={ComingSoon}/>
                
                <Route path="/facilitators/new" component={NewFacilitatorForm}/>

                {/* View All Organisations */}
                <Route exact strict path="/organisations" render={() => {
                  return <OrganisationList updateHeaderTitle={this.updateHeaderTitle} />
                }} />

                {/* <Route path="/organisations/:id/edit" component={OrganisationEdit}/> */}

                {/* Add New Organisation*/}
                <Route exact strict path="/organisations/new" render={() => {
                  return <NewOrganisationForm updateHeaderTitle={this.updateHeaderTitle} />
                }} />

                {/* View Single Organisation */}
                <Route path="/organisations/:id" component={OrganisationView}/>

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
          </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default App;
