import React, { Component } from 'react'

import { ColorExtractor } from 'react-color-extractor'
export class Test extends Component {


  state = { colors: [] }

  renderSwatches = () => {
    const { colors } = this.state

    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100
          }}
        />
      )
    })
  }

  getColors = colors =>{
console.log(colors)
      this.setState(state => ({ colors: [...state.colors, ...colors] }))
  }
    render() {
        return (
            <div>
              <ColorExtractor getColors={this.getColors}>
                <img
                  src="https://image.tmdb.org/t/p/w500//4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg"
                  style={{ display:'none' }}
                />
              </ColorExtractor>
              <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                {this.renderSwatches()}
              </div>
            </div>
          )
    }
}

export default Test
