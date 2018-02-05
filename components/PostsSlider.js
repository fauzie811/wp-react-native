import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSlides } from '../actions/sliderActions'
import Slider from './common/Slider'
import PostsSliderItem from './PostsSliderItem'

class PostsList extends Component {
  _renderItem = (item) => {
    return (
      <PostsSliderItem
        key={item.id} post={item}
        onPress={() => {
          this.props.navigation.navigate('Post', { post: item })
        }}
      />
    )
  };

  componentWillMount () {
    this.props.fetchSlides()
  }

  render () {
    return (
      <Slider
        data={this.props.slides}
        renderItem={this._renderItem}
      />
    )
  }
}

const mapStateToProps = ({ slides }) => {
  return { slides }
}

export default connect(mapStateToProps, { fetchSlides })(PostsList)
