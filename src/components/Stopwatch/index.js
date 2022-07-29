// Write your code here
import {Component} from 'react'
import './index.css'

class stopWatch extends Component {
  state = {isStart: false, timer: 0}

  startBtnClicked = () => {
    const {isStart} = this.state
    if (isStart === false) {
      this.timerId = setInterval(this.incTimer, 1000)
      this.setState({isStart: true})
    }
  }

  incTimer = () => {
    const {timer} = this.state
    this.setState({timer: timer + 1})
  }

  stopBtnClicked = () => {
    clearInterval(this.timerId)
    this.setState(preState => ({timer: preState.timer, isStart: false}))
  }

  resetBtnClicked = () => {
    clearInterval(this.timerId)
    this.setState({timer: 0, isStart: false})
  }

  getMinTime = () => {
    const {timer} = this.state
    let minValue = Math.floor(timer / 60)
    if (minValue / 10 < 1) {
      minValue = 0 + minValue.toString()
    }
    return minValue
  }

  getSecTime = () => {
    const {timer} = this.state
    let secValue = Math.floor(timer % 60)
    if (secValue / 10 < 1) {
      secValue = 0 + secValue.toString()
    }
    return secValue
  }

  render() {
    const minTimer = this.getMinTime()
    const secTimer = this.getSecTime()

    return (
      <div className="container">
        <div className="clock-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="image-timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer-heading">Timer</p>
            </div>

            <h1 className="counter-heading">
              {minTimer}:{secTimer}
            </h1>
            <div className="btn-container">
              <button
                type="button"
                className="button btn1"
                onClick={this.startBtnClicked}
              >
                Start
              </button>
              <button
                type="button"
                className="button btn2"
                onClick={this.stopBtnClicked}
              >
                Stop
              </button>
              <button
                type="button"
                className="button btn3"
                onClick={this.resetBtnClicked}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default stopWatch
