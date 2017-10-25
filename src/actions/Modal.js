import * as modalActionsTypes from '../constants/Modal'

export const showModal = (modalType, modalProps) => {
  return {
    type: modalActionsTypes.SHOW_MODAL,
    modalType,
    modalProps
  }
}

export const hideModal = () => {
  return {
    type: modalActionsTypes.HIDE_MODAL
  }
}
