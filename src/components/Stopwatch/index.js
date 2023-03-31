// Write your code here
import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {isRunning: false, seconds: 0}

  tick = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onClickStart = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      this.timer = setInterval(this.tick, 1000)
      this.setState({isRunning: true})
    }
  }

  onClickStop = () => {
    clearInterval(this.timer)
    this.setState({isRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.timer)
    this.setState({seconds: 0, isRunning: false})
  }

  render() {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const stringMins = minutes > 9 ? minutes : `0${minutes}`
    const stringSecs = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="mainBg">
        <h1>Stopwatch</h1>
        <div className="card">
          <p>
            <span>
              <img
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
            </span>
            Timer
          </p>
          <h1>
            {stringMins}:{stringSecs}
          </h1>
          <div>
            <button
              className="btn c1"
              type="button"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button className="btn c2" type="button" onClick={this.onClickStop}>
              Stop
            </button>
            <button
              className="btn c3"
              type="button"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
