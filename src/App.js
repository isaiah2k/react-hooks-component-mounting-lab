// src/App.js
import React, { Component } from 'react'
import Timer from './Timer'

class App extends Component {
  state = {
    timerIDs: []
  }

  componentDidMount() {
    this.handleAddTimer()
  }

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>
        <div className="TimerGrid">
          {this.renderTimers()}
        </div>
      </div>
    )
  }

  renderTimers = () => {
    return this.state.timerIDs.map(id => (
      <Timer key={id} id={id} removeTimer={this.removeTimer} />
    ))
  }

  handleAddTimer = () => {
    const newId = Math.floor(Math.random() * 1000)
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, newId]
    }))
  }

  removeTimer = (id) => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }
}

export default App
