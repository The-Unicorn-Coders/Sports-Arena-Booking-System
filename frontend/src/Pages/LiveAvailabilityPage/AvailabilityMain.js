import React from 'react'
import TopImagesSec from './TopImagesSec'
import Availability from './Availability'
//import FirstButtonSec from './FirstButtonSec'
import SelectionBox from './SelectionBox'
import OpeningHours from './OpeningHours'
//import DateButton from './DateButton'
import BookNow from './BookNow'
import Header from '../Header'


export default function AvailabilityMain() {
  return (
    <div>
      <Header/>
      {<div><TopImagesSec/></div>}
      {<div><Availability/></div>}
      {/*<div><FirstButtonSec/></div>*/}
      {<div><SelectionBox/></div>}
      {<div><OpeningHours/></div>}
      {<div><BookNow/></div>}
    </div>
  )
}
