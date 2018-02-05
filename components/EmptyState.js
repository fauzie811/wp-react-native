import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'

export default ({ iconName = 'ios-document-outline', text = 'Empty' }) => (
  <View style={styles.container}>
    <Icon style={styles.icon} size={128} name={iconName} />
    <Text style={styles.text}>{text}</Text>
  </View>
)

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: 'rgba(0,0,0,0.1)'
  },
  text: {
    color: 'rgba(0,0,0,0.2)',
    fontSize: 16
  }
}
