import React from 'react'

const Event = ({ date, startTime, endTime, comment, removeEvent }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{startTime}</td>
      <td>{endTime}</td>
      <td>{comment}</td>
      <td>
        <button type='button' className='btn btn-danger' onClick={removeEvent}>
          Remove
        </button>
      </td>
    </tr>
  )
}

export default Event
