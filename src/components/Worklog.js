import React, { Component } from 'react'
import EventController from '../containers/EventController'
import AddEvent from './AddEvent'
import ModalRoot from '../containers/ModalRoot'

class Worklog extends Component {
  render () {
    return (
      <div>
        <EventController />
        <AddEvent />
        <ModalRoot />
      </div>
    )
  }
}

export default Worklog
