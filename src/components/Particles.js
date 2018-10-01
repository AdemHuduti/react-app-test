import React, { Component } from 'react'
import Particles from 'react-particles-js';

export default class Test extends Component {
  render() {
    const myParams = {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 3000
          }
        }
      }
    }
    return (
      <div>
        Particles!!!!!
        <Particles
          params={myParams}
        />
      </div>
    )
  }
}
