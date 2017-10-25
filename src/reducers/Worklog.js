import * as worklogActionsTypes from '../constants/Worklog'

let id = 0

const initialState = {
  events: [
    {
      id: ++id,
      date: '20/11/109',
      startTime: '14:00',
      endTime: '16:54',
      comment: 'text'
    },
    {
      id: ++id,
      date: '20/11/109',
      startTime: '14:00',
      endTime: '16:54',
      comment: 'text'
    }
  ]
}

const worklog = (state = initialState, action) => {
  switch (action.type) {
    case worklogActionsTypes.ADD_EVENT: {
      const updatedEvents = [
        ...state.players,
        {
          id: ++id,
          text: action.text
        }
      ]
      return {
        ...state,
        events: updatedEvents
      }
    }
    case worklogActionsTypes.REMOVE_EVENT: {
      const updatedEvents = state.events.filter(e => e.id !== action.id)
      return {
        ...state,
        events: updatedEvents
      }
    }
    default:
      return state
  }
}

export default worklog
