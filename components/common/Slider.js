import React, { Component } from 'react'
import { ScrollView } from 'react-native'

export default class Slider extends Component {
  static defaultProps = {
    data: [],
    renderItem: () => null
  }

  _renderSlides () {
    return this.props.data.map(slide => {
      return this.props.renderItem(slide)
    })
  };

  render () {
    return (
      <ScrollView
        indicatorStyle='white'
        horizontal
        style={{ ...this.props.style }}
      >
        {this._renderSlides()}
      </ScrollView>
    )
  }
}
