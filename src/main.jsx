import React from 'react'
import ReactDOM from 'react-dom/client'
import DigitalCard from './DigitalCard'

import ReactFacts from "./ReactFacts"
import "./main.css"



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= ({
      lesson: "btn active",
      solo: "btn",
      displayProj: "lesson"
    });
    this.handleDisplay = this.handleDisplay.bind(this)
  }
  handleDisplay(button) {
    switch(button.target.id) {
      case "lesson":
          this.setState({
              lesson: "btn active",
              solo: "btn",
              displayProj: "lesson"
          })
          break;
      case "solo":
          this.setState({
              lesson: "btn",
              solo: "btn active",
              displayProj: "solo"
          })
          break;
  }
  }
  render() {
    return (
      <main className='projects-container'>
        <div className="switch-container">
            <button className={this.state.lesson} id="lesson" onClick={this.handleDisplay}>lesson project</button>
            <button className={this.state.solo} id="solo" onClick={this.handleDisplay}>solo project</button>
        </div>
        {
          this.state.displayProj === "lesson" ?
          <ReactFacts /> :
          <DigitalCard />
        }
      </main>
    )
  }
}


ReactDOM.createRoot(document.getElementById('root')).render( <Main /> );
