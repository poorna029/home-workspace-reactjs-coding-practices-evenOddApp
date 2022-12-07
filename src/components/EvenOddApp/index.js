// Write your code here

import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {num: [0]}

  onIncre = () => {
    const {num} = this.state
    num.push(Math.ceil(Math.random() * 100))
    this.setState(() => {
      console.log('poo')
      console.log(num)

      return num
    })
  }

  evenOrodd = output => {
    const {num} = this.state

    return output % 2 === 0 ? 'Even' : 'Odd'
  }

  getInfo = () => {
    const {num} = this.state
    return num
  }

  onIncrement = () => {
    const {num} = this.state

    if (num.length < 1) {
      num.push(Math.ceil(Math.random() * 100))
    }
    console.log('p')

    return num
  }

  render() {
    const {num} = this.state

    const nu = this.getInfo()

    let output

    const fu = (total, numb) => total + Math.round(numb)

    if (num.length <= 1) {
      const n = this.onIncrement()
      output = num[num.length - 1]
    } else {
      output = num.reduce(fu)
    }

    console.log(num[num.length - 1], output)

    const k = this.evenOrodd(output)
    return (
      <div className="container">
        <h1 className="heading">{`Count ${output}`}</h1>
        <p className="para">{`Count is ${k}`}</p>
        <button onClick={this.onIncre}>Increment</button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
