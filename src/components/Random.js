import React, { Component } from 'react'

export default class RandomQuotes extends Component {
  state = {
    names: ''
  }

  getQuotes = () => {
    let arr = [
      'Adem',
      'Name',
      'Hutko',
      'Lutko'
    ]

    let showNames = Math.floor(Math.random() * arr.length);
    this.setState({
      names: arr[showNames]
    });
  }

  render() {
    return (
      <div>
        RandomQuotes!
        <button onClick={this.getQuotes.bind(this)}>Get!</button>
        <p>{this.state.names}</p>
      </div>
    )
  }
}
