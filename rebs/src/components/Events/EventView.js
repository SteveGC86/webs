import React from 'react';

function Title(props) {
  return <h1>{props.title}</h1>
}

function Status(props) {
  return <div>{props.status}</div>
}

function DateFrom(props) {
  return <div>
      <p>Date: </p> 
      <p>{props.dateFrom}</p>
    </div>
}

function DateTo(props) {
  return <div>{props.dateTo}</div>
}

function Onsite(props) {
  return <div>{props.onsite}</div>
}

function Location(props) {
  return <div>
      <p>Location:</p>
      <p>{props.location}</p>
    </div>
}

function Organisation(props) {
  return <div>
      <p>Organisation:</p>
      <p>{props.organisation}</p>
    </div>
}

function Attendees(props) {
  return <div>
      <p>Attendees:</p>
      <p>{props.attendees}</p>
    </div>
}

export default { Title, Status, DateFrom, DateTo, Onsite, Location, Organisation, Attendees }

