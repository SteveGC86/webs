import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import styled from 'styled-components';



class EventEdit extends Component {
  
  state = {
    redirect: false,
    startDate: new Date(),
    endDate: new Date(),
    selectedWorkshop: '',
    selectedFacilitator: '',
    selectedLocation: '',
    selectedOrganisation: '',
    selectedStatus: '',
    users: null,
    orgs: null,
    workshops: null,
  }
  


  handleChange = (e) => {

    const workshop_id = this.props.location.state.singleEvent._id
    const url = `${process.env.REACT_APP_API_URI}/events/${workshop_id}`
    const data = { 
        "title": [{
          "id": this.state.selectedWorkshop.value,
          "workshop_name": this.state.selectedWorkshop.label
        }],
        "facilitatorObjs": this.state.selectedFacilitator.map(facilitator => {
          return {
            "id": facilitator.value,
            "status": "Pending"
          }
        }),
        "attendees": 0,
        "status": "Pending",
        "creator": null,
        "notes": e.target.notes.value,
        "onsite": e.target.onsite.checked,
        "organisation": {
          "id": {
            "_id": this.state.selectedOrganisation.value
          },
        },
        "bookings": [
          {
          "start": new Date(this.state.startDate),
          "end": new Date(this.state.endDate),
          "location": this.state.selectedLocation.value,
          }]
      }
      console.log(data)
      axios.patch(url, data)
    .then((res) => {
      console.log(res.data.title);
      console.log(res.data);
      this.setState({redirect: true})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
        

    startDateChange = (date) => {
      this.setState({ startDate: date });
    }

    endDateChange = (date) => {
      this.setState({ endDate: date });
    }

    workshopSelect = (workshop) => {
      this.setState({ selectedWorkshop: workshop});
    }
    facilitatorSelect = (facilitator) => {
      this.setState({ selectedFacilitator: facilitator })
      }

    locationSelect = (location) => {
      this.setState({ selectedLocation: location });
      }

    organisationSelect = (organisation) => {
      this.setState({ selectedOrganisation: organisation})
    }
    statusSelect = (status) => {
      this.setState({ selectedStatus: status})
    }

    componentDidMount(){
      const singleEvent = this.props.location.state.singleEvent
      console.log(singleEvent)
      const facilitators = singleEvent.facilitatorObjs.map(facil => {
        return { value: facil.id._id, label: `${facil.id.f_name} ${facil.id.l_name}`}
      })
      this.setState({
        startDate: singleEvent.bookings[0].start,
        endDate: singleEvent.bookings[0].end,
        selectedWorkshop: {value: singleEvent.title[0].id._id, label: singleEvent.title[0].id.workshop_name},
        selectedFacilitator: facilitators,
        selectedLocation: {value: singleEvent.bookings[0].location, label: singleEvent.bookings[0].location},
        selectedOrganisation: {value: singleEvent.organisation.id._id, label: singleEvent.organisation.id.org_name},
        selectedStatus: {value: singleEvent.status, label: singleEvent.status}
      })
      axios.get(`${process.env.REACT_APP_API_URI}/users`)
      .then(users => {
        this.setState({users: users.data})
      })

      axios.get(`${process.env.REACT_APP_API_URI}/organisations`)
      .then(orgs => {
        this.setState({orgs: orgs.data})
      })

      axios.get(`${process.env.REACT_APP_API_URI}/workshops`)
      .then(workshops => {
        this.setState({workshops: workshops.data})
      })
    }


    render() {
      const singleEvent = this.props.location.state.singleEvent
      const { startDate, endDate, redirect, selectedStatus, selectedWorkshop, selectedFacilitator, selectedLocation, selectedOrganisation, orgs, users, workshops } = this.state;




      const MultiSelect = styled(Select)`
    &.Select--multi  {
      width:70vw;
      margin: 0 15vw 3vh 15vw;
      font-size: 3vh;
    }
    @media (min-width: 1000px){
      &.Select--multi  {
        width:40vw;
        margin: 0 30vw 3vh 30vw;
        font-size: 3vh;
      }
    }
  `

      const SingleSelect = styled(Select)`
        &.Select  {
          width:70vw;
          margin: 0 15vw 3vh 15vw;
          font-size: 3vh;
        }
        @media (min-width: 1000px){
          &.Select  {
            width:40vw;
            margin: 0 30vw 3vh 30vw;
            font-size: 3vh;
          }
        }
        `
        const LocationSelect = styled(Select)`
        &.Select  {
          width:70vw;
          margin: 3vh 15vw 3vh 0vw;
          font-size: 3vh;
        }
        @media (min-width: 1000px){
          &.Select  {
            width:40vw;
            margin: 3vh 0vw 3vh 15vw;
            font-size: 3vh;
          }
        }
        `
    if(redirect){

      return <Redirect to={{
        pathname: `/events`,
        state: { singleEvent: singleEvent }
      }}/>
    }
    if(!users || !orgs || !workshops){
      return <h2>Loading...</h2>
    }
    return (
      <div className="eventEdit">
        <h2>Edit Workshop</h2><br/><br/>
          <form onSubmit={(e) =>{
            e.preventDefault()
            this.handleChange(e)
          }}>
                         
            <SingleSelect
              name="workshopTitle"
              value={selectedWorkshop}
              onChange={this.workshopSelect}
              required
              options={workshops.map(workshop => {
                return {value: workshop._id, label: workshop.workshop_name}
              })}
            />
          

            <MultiSelect
              multi
              joinValues
              delimiter={','}
              name="facilitators"
              value={selectedFacilitator}
              onChange={this.facilitatorSelect}
              required
              options={users.map(user => {
                return {value: user._id, label: `${user.f_name} ${user.l_name}`}
              })}
            /> 
             
              
              
            <div className="onsite" >
              <p>Onsite</p>
              <input type="checkbox" defaultChecked={singleEvent.onsite ? true : false} name="onsite" />
            </div>

            <SingleSelect
          name="organisation"
          placeholder="Organisation"
          // simpleValue
          value={selectedOrganisation}
          onChange={this.organisationSelect}
          options={orgs.map(org => {
            return {value: org._id, label: org.org_name}
          })}
          /><br/>
            <input type="text"  ref={this.notes} placeholder="Notes" defaultValue={singleEvent.notes} name="notes"/><br />

            <div className="dates">
              <div className="singleBooking">
              <div className="datesAlign">
                <p>Start Time: <br/></p>
                  <DateTimePicker
                    value={startDate}
                    onChange={this.startDateChange}
                  />

                  <p>End Time:<br/></p>
                  <DateTimePicker
                    value={endDate}
                    onChange={this.endDateChange}
                  />  
              </div>  
              
              <LocationSelect
                name="location"
                placeholder="Location"
                simpleValue
                value={selectedLocation}
                onChange={this.locationSelect}
                options={[
                  { value: 'Melbourne', label: 'Melbourne' },
                  { value: 'Sydney', label: 'Sydney' },
                
                  ]}
                />
            </div>            
            </div>

              
          <p>Attendees: </p>
          <input type="number" placeholder="0" defaultValue={singleEvent.attendees} name="attendees" required/> <br /><br/>

          <SingleSelect
          name="status"
          placeholder="Workshop Status"
          simpleValue
          value={selectedStatus}
          onChange={this.statusSelect}
          options={[
            { value: 'confirmed', label: 'Confirmed' },
            { value: 'pending', label: 'Pending' },
            { value: 'cancelled', label: 'Cancelled' },
           
            ]}
          /><br/>

          <button value="submit">Submit</button>
          
        </form>

      </div>
    )
  }
}


export default EventEdit