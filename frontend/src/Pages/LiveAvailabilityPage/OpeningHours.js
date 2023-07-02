import React from 'react'
import './OpeningHours.css'

export default function OpeningHours() {
  return (
    <div>
      <span className='topic2'>Opening Hours</span>
      <div className='time'>
        <span className='time-slot'>Mon&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
        <span className='time-slot'>Tue&nbsp;&nbsp;&nbsp;&nbsp;7.00am -&nbsp;9.00pm</span>
        <span className='time-slot'>Wed&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
        <span className='time-slot'>Thu&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
        <span className='time-slot'>Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp;-&nbsp;9.00pm</span>
        <span className='time-slot'>Sat&nbsp;&nbsp;&nbsp;&nbsp;7.00am&nbsp; -&nbsp;9.00pm</span>
        <span className='time-slot'>Sun&nbsp;&nbsp; 7.00am&nbsp;&nbsp;-&nbsp;9.00pm</span>
      </div>
    </div>
  )
}
