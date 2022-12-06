import React from 'react'
import FactsMain from './components/ReactFacts/FactsMain'
import Navbar from './components/ReactFacts/Navbar'

import "./react-facts.css"

export default function ReactFacts() {
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode);
  }
  return (
    <div className="react-facts">
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <FactsMain 
        darkMode={darkMode}
      />
    </div>
  )
}
