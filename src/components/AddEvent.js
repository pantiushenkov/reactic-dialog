import React from 'react'
import { connect } from 'react-redux'
import * as ModalActionCreators from '../actions/Modal'

const AddEvent = ({ showModal }) => {
  return (
    <div>
      <button onClick={() => showModal('FormModal', {'foo': 'foo'})}>Open form</button>
      <div style={{margin: 40}} />
      <button onClick={() => showModal('SigninModal', {'foo': 'foo'})}>Open signin</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: (modalType, modalProps) =>
      dispatch(ModalActionCreators.showModal(modalType, modalProps))
  }
}

export default connect(null, mapDispatchToProps)(AddEvent)
