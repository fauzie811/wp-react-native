import React from 'react'
import { View } from 'react-native'

import Header from '../components/common/Header'
import About from '../components/About'

export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <Header title='About' />
    <About />
  </View>
)
