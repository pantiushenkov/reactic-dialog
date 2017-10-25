import EventList from '../components/EventList'
import { connect } from 'react-redux'
import * as eventActionCreators from '../actions/Worklog'

const getVisibleEvents = events => {
  // switch (filter) {
  //   case "SHOW_All":
  //     return state
  //   default:return events
  // }
  return events
}

const mapStateToProps = ({worklog, modals}) => {
  return {
    events: getVisibleEvents(worklog.events),
    modals: modals
  }
}

const EventController = connect(mapStateToProps, eventActionCreators)(EventList)

export default EventController
