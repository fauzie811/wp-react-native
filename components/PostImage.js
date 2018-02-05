import React, { PureComponent } from 'react'
import { Image, View } from 'react-native'

export default class PostImage extends PureComponent {
  static defaultProps = {
    showEmpty: false
  };

  _renderEmpty () {
    return this.props.showEmpty ? <View {...this.props} /> : null
  }

  render () {
    const { post } = this.props

    if (!post) return this._renderEmpty()

    if (post.featured_media === 0) return this._renderEmpty()

    let image = post.featured_media_url
    const featuredMedia = post._embedded['wp:featuredmedia'][0]
    if (!image &&
      featuredMedia.media_details.sizes &&
      featuredMedia.media_details.sizes.medium) {
      image = featuredMedia.media_details.sizes.medium.source_url
    }
    if (!image) image = featuredMedia.source_url
    if (!image) {
      image = featuredMedia.media_details.sizes.full.source_url
    }

    return (
      <Image
        source={{ uri: image }}
        {...this.props}
      />
    )
  }
}
