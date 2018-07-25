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
    selectedSkills: null,
    workshop: null,
    skills: null
  }

  handleChange = (e) => {
    const skills = this.state.selectedSkills.map(skill =>{
      return skills
    })

    const workshop_id = this.props.singleWorkshop._id

    const url = `https://webs-backend-dev.now.sh/workshops/${workshop_id}`
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
      skillsSelect = (skill) => {
        this.setState({ selectedSkills: skill});
      }

      componentDidMount(){
        const singleWorkshop = this.props.location.state.singleWorkshop
        const skills = singleWorkshop.skills_required.map(skill => {
          return { value: skill, label: skill}
        })
        this.setState({
            workshop: singleWorkshop.workshop_name,
            selectedSkills: singleWorkshop.skills_required,
        })
        console.log(singleWorkshop.skills_required)
      }

  render() {
    // const singleWorkshop = this.props.location.state.singleWorkshop

    const { selectedSkills, workshop} = this.state;

    const MultiSelect = styled(Select)`
          &.Select--multi  {
            diplay: flex;
            align-content: center;
            width: 70vw;
            margin: 0 30vw 2vh 15vw;
            border: 1px solid #363637;
            border-radius: 3px;
          }` 

    if(!workshop || selectedSkills ) {
      return <h3>Loading...</h3>
    }
    return (
      <div className="editWorkshop">
        <h2>Edit Workshop</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.handleChange(e)
          }}
        >
        <br/><br/>
        <p>Workshop Name:</p>
        <input type="text" placeholder="Workshop Name" defaultValue={workshop} name="workshop_name"/><br />
          <p>Required Skills:</p>
        <MultiSelect
            multi
            jointValues
            simpleValue
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