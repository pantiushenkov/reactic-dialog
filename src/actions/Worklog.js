import * as worklogActionsTypes from '../constants/Worklog'

export const addEvent = text => {
  return {
    type: worklogActionsTypes.ADD_EVENT,
    text
  }
}

export const removeEvent = id => {
  return {
    type: worklogActionsTypes.REMOVE_EVENT,
    id
  }
}
