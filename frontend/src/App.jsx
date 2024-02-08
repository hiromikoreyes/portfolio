import { useState } from 'react'
import './App.css'
import SkipArrow from './components/SkipArrow/SkipArrow'
import TitleCard from './components/TitleCard/TitleCard'
import AboutMe from './components/AboutMe/AboutMe'

function App() {

  return (
    <>
      
      <TitleCard/>
      <SkipArrow/>
      <AboutMe/>

    </>
  )
}

export default App;
