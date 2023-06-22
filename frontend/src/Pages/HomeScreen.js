import React from 'react'
import Header from './Header'
import Heroslider from './Heroslider'
import Pinnedarena from './Pinnedarena'
import HHeader1 from './HHeader1'
import ExpolerPart from './ExpolerPart'
import Toprated from './Toprated'
import NewlyAddedArena from './NewlyAddedArena'
import Footer from './Footer'

export default function HomeScreen() {
  return (
    <div>
      <Header/>
      <Heroslider/>
      <HHeader1/>
      <Pinnedarena/>
      <ExpolerPart/>
      <Toprated/>
      <NewlyAddedArena/>
      <Footer/>
    </div>

  )
}
