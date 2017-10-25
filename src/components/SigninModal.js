import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
// import DatePicker from "material-ui/DatePicker";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const SigninModal = ({ handleClose }) => {
  const actions = [
    <FlatButton label='Cancel' primary onClick={() => handleClose()} />,
    <FlatButton label='Submit' primary onClick={() => handleClose()} />
  ]

  return (
    <MuiThemeProvider>
      <Dialog
        title='Please Sign In'
        actions={actions}
        modal={false}
        open
        onRequestClose={() => handleClose()}
      >
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Password'
          />
        </div>
      </Dialog>
    </MuiThemeProvider>
  )
}

export default SigninModal
