import React from 'react'
import '../App.css';

function Listofevents ()  {
  return (
    <div>
      <div style={{ width: '90%', margin: '1% auto' }}><hr /></div>
      <div class="container listofevents">
        <h2>List of Events</h2>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action list-group-item-success">Project Expo</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Poster presentation</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-info">Coding</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Paper Presentation</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Technical Quiz</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Circuitrix</a>
        </div>
      </div>
    </div>
  )
}

export default Listofevents;
