import React, { Component } from 'react'
import { View } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'

import Touchable from './Touchable'
import { NAVBAR_HEIGHT } from './Header'

export default class HeaderButton extends Component {
  render () {
    const { onPress, iconName } = this.props
    return (
      <Touchable onPress={onPress}>
        <View style={styles.container}>
          <Icon style={styles.icon} size={24} name={iconName} />
        </View>
      </Touchable>
    )
  }
}

const styles = {
  container: {
    height: NAVBAR_HEIGHT,
    width: NAVBAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: 'white'
  }
}
