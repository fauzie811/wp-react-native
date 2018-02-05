import React from 'react'
import { View } from 'react-native'

import Config from '../Config'
import Header from '../components/common/Header'
import SavesList from '../components/SavesList'

export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: Config.background }}>
    <Header title='Saved' />
    <SavesList navigation={navigation} />
  </View>
)
