import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import './index.css'
import Worklog from './components/Worklog'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import worklog from './reducers/Worklog'
import modal from './reducers/Modal'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  modal,
  worklog
})

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Worklog />
  </Provider>,
	document.getElementById('root')
)
