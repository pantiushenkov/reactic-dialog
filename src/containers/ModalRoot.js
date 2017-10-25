import React from 'react'
import FormModal from '../components/FormModal'
import SigninModal from '../components/SigninModal'
import * as modalActionCreators from '../actions/Modal'
import { connect } from 'react-redux'

const MODAL_COMPONENTS = {
  FormModal: FormModal,
  SigninModal: SigninModal
}

const ModalRoot = ({ hideModal, modalType, modalProps }) => {
  if (!modalType) return null

  const SpecificModal = MODAL_COMPONENTS[modalType]

  return <SpecificModal handleClose={() => hideModal()} {...modalProps} />
}

const mapStateToProps = state => state.modal

export default connect(mapStateToProps, modalActionCreators)(ModalRoot)
