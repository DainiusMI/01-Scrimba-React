import React from 'react'
import ReactDOM from 'react-dom/client'
import DigitalCard from './DigitalCard'

import ReactFacts from "./ReactFacts"
import "../css/main.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='projects-container'> 
      <ReactFacts />
      <DigitalCard />
    </main>
  </React.StrictMode>
)
