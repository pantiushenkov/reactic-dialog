import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
// import DatePicker from "material-ui/DatePicker";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const FormModal = ({ handleClose }) => {
  const actions = [
    <FlatButton label='Cancel' primary onClick={() => handleClose()} />,
    <FlatButton label='Submit' primary onClick={() => handleClose()} />
  ]

  return (
    <MuiThemeProvider>
      <Dialog
        title='Please fill out the form'
        actions={actions}
        modal={false}
        onRequestClose={() => handleClose()}
        open
      >
        <div className='form-group row'>
          <label htmlFor='example-date-input' className='col-2 col-form-label'>
            Date
          </label>
          <div className='col-10'>
            <input className='form-control' type='date' value='2011-08-19' />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='example-time-input' className='col-2 col-form-label'>
            Time
          </label>
          <div className='col-10'>
            <input className='form-control' type='time' value='13:45:00' />
          </div>
        </div>
      </Dialog>
    </MuiThemeProvider>
  )
}

export default FormModal
