import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Entities from 'html-entities'

import Touchable from './common/Touchable'
import PostImage from './PostImage'
import PostMeta from './PostMeta'

const entities = new Entities.AllHtmlEntities()

export default class PostsListItem extends PureComponent {
  render () {
    const { post, onPress } = this.props

    return (
      <Touchable onPress={onPress}>
        <View style={styles.container}>
          <PostImage style={styles.thumbnail} post={post} />
          <View style={styles.details}>
            <Text style={styles.title}>{entities.decode(post.title.rendered)}</Text>
            <PostMeta post={post} />
          </View>
        </View>
      </Touchable>
    )
  }
}

const styles = {
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 1,
    minHeight: 96
  },
  thumbnail: {
    height: 80,
    width: 80,
    marginRight: 10
  },
  details: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    color: 'rgba(0,0,0,0.87)',
    fontSize: 14,
    fontFamily: 'roboto-slab-regular'
  }
}
