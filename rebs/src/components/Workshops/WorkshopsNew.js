import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import styled from 'styled-components';

class NewWorkshop extends Component {
  state ={
    redirect: false,
    selectedSkills: '',
  }

  handleChange(e) {
    const skills = this.state.selectedSkills.map(skill => {
      return skill.label
    })
    console.log(e.target)

    this.setState({ [e.target.name]: e.target.value });
    console.log(this.selectedSkills)

    const url ='https://webs-backend-dev.now.sh/workshops/new'         //TODO: add URL
    const data = {
      title: e.target.workshop.value,
      skills: skills
    }
    console.log(data)

    fetch(url, {
      method: 'POST',
      body: JSON. stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error', error))
    .then(() => {
      this.setState({redirect: true})
    });
  }

    componentDidMount(){
        this.props.updateHeaderTitle("New Workshop");
    }
    skillSelect = (skill) => {
      this.setState({ selectedSkills: skill })
    }

  render() {
    const { redirect , selectedSkills } = this.state;

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
  if(redirect){
    return <Redirect to={'/workshops'}/>   //TODO: ADD REDIRECTION
  }

    return (
        <div className="newWorkshop">
        
      <h2>New Workshop</h2>
          <form id="newWorkshopForm" onSubmit ={(e) => {
            e.preventDefault();
            this.handleChange(e)
            document.getElementById('newEventForm').requestFullscreen()
          }}>

          <input type="text" name="workshop"/>

          <MultiSelect
            multi
            jointValues
            delimiter={','}
            name="skills"
            value={selectedSkills}
            onChange={this.skillSelect}
            placeholder="Skills"
            options={[
              { value: 'html/css', label: 'HTML/CSS' },
              { value: 'ruby', label: 'Ruby' },
              { value: 'javaScript', label: 'JavaScript' },
              { value: 'workingWithKids', label: 'JAVASCRIPT' },
              { value: 'Unity', label: 'Unity' },
              { value: 'Swift', label: 'Swift' },
              { value: 'Sphero (Block', label: 'Sphero (Block)' },
              { value: 'Sphero (JS)', label: 'Sphero (JS)' },
              { value: 'Cozmo', label: 'Cozmo' },
              { value: 'Tinkercad', label: 'Tinkercad' },
              { value: 'Gamefroot', label: 'Gamefroot' },
              { value: 'Scratch / Junior', label: 'Scratch / Junior' },
              { value: 'Drone', label: 'Drone' },
              { value: 'Lego Wedo', label: 'Lego Wedo' },
              { value: 'Little Bits', label: 'Little Bits' },
              { value: 'Neuron', label: 'Neuron' },
              { value: 'Pixel Art', label: 'Pixel Art' },
              { value: 'Vive (recreational)', label: 'Vive (recreational)' },
              { value: 'Vive (dev)', label: 'Vive (dev)' },
              { value: 'Vive (tech', label: 'Vive (tech)' },
            ]}
          />

            <p><button type="submit">Submit</button></p>
          </form>
        </div>
    );
  }
}

export default NewWorkshop;