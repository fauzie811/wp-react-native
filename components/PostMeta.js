import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'
import moment from 'moment'

import Config from '../Config'

export default class PostMeta extends PureComponent {
  static defaultProps = {
    dark: false
  };

  _category () {
    const { post } = this.props

    return post._embedded['wp:term'] && post._embedded['wp:term'][0][0]
      ? post._embedded['wp:term'][0][0].name
      : 'Uncategorized'
  }

  _categoryOrAuthor () {
    const { post } = this.props

    return Config.showAuthors
      ? post._embedded.author[0].name
      : this._category()
  }

  _categoryOrAuthorIcon () {
    // const { post } = this.props

    return Config.showAuthors
      ? 'ios-person-outline'
      : 'ios-folder-open-outline'
  }

  render () {
    const { post, dark, style } = this.props
    const { container, containerDark, icon, iconDark, text, textDark } = styles

    return (
      <View style={[container, dark && containerDark, style]}>
        <Icon style={[icon, dark && iconDark]} name={this._categoryOrAuthorIcon()} size={16} />
        <Text style={[text, dark && textDark]} numberOfLines={1}>{this._categoryOrAuthor()}</Text>
        <View style={{ flex: 1 }} />
        <Icon style={[icon, dark && iconDark]} name='ios-calendar-outline' size={16} />
        <Text style={[text, dark && textDark]}>{moment(post.date).fromNow()}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    borderTopColor: '#ddd',
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#aaa',
    marginRight: 5
  },
  text: {
    backgroundColor: 'transparent',
    color: '#aaa',
    fontSize: 12
  },
  containerDark: {
    borderTopColor: 'rgba(255,255,255,0.45)'
  },
  iconDark: {
    color: 'rgba(255,255,255,0.65)'
  },
  textDark: {
    color: 'rgba(255,255,255,0.65)'
  }
}
