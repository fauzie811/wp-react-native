import React from 'react'
import { View, Dimensions, Image, Text } from 'react-native'
import HTML from 'react-native-render-html'
import moment from 'moment'
import Entities from 'html-entities'
import sanitizeHtml from 'sanitize-html'

import Config from '../Config'
import PostImage from './PostImage'
import PostMeta from './PostMeta'

const window = Dimensions.get('window')
const entities = new Entities.AllHtmlEntities()

const styles = {
  featuredImage: {
    backgroundColor: 'black',
    width: window.width,
    height: 300
  },
  title: {
    fontFamily: 'roboto-slab-regular',
    fontSize: 20,
    lineHeight: 22,
    marginTop: 16,
    marginHorizontal: 16
  },
  meta: {
    marginTop: 16,
    marginHorizontal: 16
  }
}

export default ({ post }) => {
  return (
    <View>
      <PostImage post={post} style={styles.featuredImage} showEmpty />
      <Text style={styles.title}>{entities.decode(post.title.rendered)}</Text>
      <PostMeta style={styles.meta} post={post} />
      <View style={{ paddingHorizontal: 16 }}>
        <HTML
          html={sanitizeHtml(post.content.rendered, Config.sanitizeOptions)}
          htmlStyles={Config.htmlStyles}
          imagesMaxWidth={window.width}
        />
      </View>
    </View>
  )
}
