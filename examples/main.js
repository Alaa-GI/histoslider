import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Histoslider from '../lib/components/Histoslider'

const main = document.getElementById('main')

class App extends Component {

  histogramChanged (newSelection) {
    this.setState({
      selection: newSelection
    })
  }

  constructor () {
    super()
    this.state = {
      selection: [4, 2]
    }
  }

  changeX (e) {
    this.setState({
      selection: [+e.target.value, this.state.selection[1]]
    })
  }

  changeY (e) {
    this.setState({
      selection: [this.state.selection[0], +e.target.value]
    })
  }

  render () {
    return (
      <div>
        <div style={{ margin: '0 0 1rem 0' }}>
          <p>
            <b>Selection</b>
          </p>
          <p>{ this.state && this.state.selection ? JSON.stringify(this.state.selection) : 'None' }</p>
        </div>
        <Histoslider
          selection={this.state.selection}
          padding={20}
          data={[1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 3, 2, 3, 3, 3, 3, 3]}
          onChange={this.histogramChanged.bind(this)}
        />
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), main)
