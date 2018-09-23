import React, {Component} from 'react'

import Number from './Number'

export default class Phonewords extends  Component {
  render() {
    const {phonewords} = this.props

    return (
      <div className="phonewords">
        {phonewords.map(word => (
          <span className="phoneword" key={word}>{word}</span>
        ))}
      </div>
    )
  }
}
