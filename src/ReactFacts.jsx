import React from 'react'
import FactsMain from './components/ReactFacts/FactsMain'
import Navbar from './components/ReactFacts/Navbar'

import "../css/ReactFacts.css"

export default function ReactFacts() {
  return (
    <div className="react-facts">
      <Navbar />
      <FactsMain />
    </div>
  )
}
