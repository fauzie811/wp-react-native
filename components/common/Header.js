import React, { Component } from 'react'
import { View, Text, Platform, Animated } from 'react-native'

import Config from '../../Config'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 24
export const NAVBAR_HEIGHT = 48
const HEADER_HEIGHT = STATUSBAR_HEIGHT + NAVBAR_HEIGHT

export default class Header extends Component {
  static defaultProps = {
    title: '',
    leftComponent: null,
    rightComponent: null
  };

  render () {
    const { title, style } = this.props

    return (
      <Animated.View {...this.props} style={[styles.container, style]}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
        </View>
        {this.props.leftComponent}
        {this.props.rightComponent}
      </Animated.View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: Config.colorPrimary,
    height: HEADER_HEIGHT,
    paddingTop: STATUSBAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: STATUSBAR_HEIGHT,
    height: NAVBAR_HEIGHT
  },
  title: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
    fontWeight: '600'
  }
}
