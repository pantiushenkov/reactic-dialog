import React from 'react'
import Event from './Event'

const EventList = ({ events, removeEvent }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Start time</th>
          <th>End time</th>
          <th>Comment</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {events.map(e => (
          <Event key={e.id} {...e} removeEvent={() => removeEvent(e.id)} />
        ))}
      </tbody>
    </table>
  )
}

export default EventList
