import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import moment from 'moment'

import Touchable from './common/Touchable'
import PostImage from './PostImage'
import PostMeta from './PostMeta'

const window = Dimensions.get('window')

export default class PostsSliderItem extends PureComponent {
  render () {
    const { post, onPress } = this.props

    return (
      <Touchable onPress={onPress}>
        <View style={styles.container} collapsable={false}>
          <PostImage
            post={post}
            style={styles.image}
            showEmpty
          >
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} style={styles.details}>
              <Text style={styles.title}>{post.title.rendered}</Text>
              <PostMeta post={post} dark />
            </LinearGradient>
          </PostImage>
        </View>
      </Touchable>
    )
  }
}

const styles = {
  container: {
    width: window.width * 0.9,
    height: (window.width * 0.9) * 0.56,
    marginTop: 2,
    marginBottom: 1,
    marginLeft: 2
  },
  image: {
    backgroundColor: '#ccc',
    flex: 1
  },
  details: {
    padding: 10,
    paddingTop: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 14,
    fontFamily: 'roboto-slab-regular',
    marginBottom: 10
  }
}
