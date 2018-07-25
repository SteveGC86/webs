import React, { Component } from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
// import { EXIST } from 'constants';
import styled from 'styled-components';

class WorkshopsEdit extends Component {

  state ={
    redirect: false,
    selecectWorkshop: '',
    selectedSkills: '',
  }

  handleChange = (e) => {
    const skills = this.state.selectedSkills.map(skill =>{
      return skills
    })

    const workshop_id = this.props.singleWorkshop._id

    const url = `${process.env.REACT_APP_API_URI}/workshops/${workshop_id}`
      axios.patch(url, {
        _id: workshop_id,
        title: this.state.selecectWorkshop,
        skills: this.state.selectedSkills
      })

      .then((res) => {
        console.log(res.data.title);
        console.log(res.data);
        this.setState({redirect: true})
      })
      .catch(function (error) {
        console.log(error);
      })
    }

      workshopSelect = (workshop) => {
        this.setState({ selectedWorkshop: workshop});
      }

      skillsSelect = (skill) => {
        this.setState({ selectedSkills: skill});
      }
  render() {
    const singleWorkshop = this.props.singleWorkshop._id

    const { selectedWorkshop, selectedSkills } = this.state;

    const MultiSelect = styled(Select)`
          &.Select--multi  {
            diplay: flex;
            align-content: center;
            width: 70vw;
            margin: 0 30vw 0 30vw;
            border: 1px solid #363637;
            border-radius: 3px;
          }` 

    return (
      <div className="editWorkshop">
        <h2>Edit Workshop</h2>
          <form onsSubmit={(e) => {
            e.preventDefault()
            this.handleChange(e)
          }}
        >

          <Select
                    name="workshopTitle"
                    simpleValue
                    value={selectedWorkshop}
                    onChange={this.workshopSelect}
                    required
                    options={[
                      { value: 'Hands-on Coding for Beginners', label: 'Hands-on Coding for Beginners' },
                      { value: 'Hands-on Coding for Intermediate', label: 'Hands-on Coding for Intermediate' },
                      { value: 'Unity Gamemaker for Kids', label: 'Unity Gamemaker for Kids' },
                      { value: 'Build a Web App (HTML, CSS, JavaScript', label: 'Build a Web App (HTML, CSS, JavaScript) ' },
                      { value: 'IoT and Ardunio workshop ', label: 'IoT and Ardunio workshop ' },
                      { value: 'Coding & Robotics for Kids', label: 'Coding & Robotics for Kids' },
                      { value: 'userSchool Excursion - Intro to JavascriptID1', label: 'School Excursion - Intro to Javascript ' },
                      { value: 'Unity Gamemaker for Kids Day 3 of 3', label: 'Unity Gamemaker for Kids Day 3 of 3' },
                      { value: 'Become a Digital Artist', label: 'Become a Digital Artist' },
                      { value: 'userCreate VFX in FilmID1', label: 'Create VFX in Film' },
                      { value: 'Code Your World', label: 'Code Your World' },
                      { value: 'Immersive Robotocs', label: 'Immersive Robotocs' },
                      { value: 'Gamers Unite', label: 'Gamers Unite' },
                      { value: '3D Character Creation', label: '3D Character Creation ' },
                      { value: 'Virtual Reality (VR) Experience', label: 'Virtual Reality (VR) Experience' }
                    ]}
                />

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
          
          <button value="submit">Submit</button>
          </form>
        </div>
    );
  }
}

export default WorkshopsEdit;