import React from 'react'
import { View } from 'react-native'

import Config from '../Config'
import Header from '../components/common/Header'
import CategoriesList from '../components/CategoriesList'

export default () => (
  <View style={{ flex: 1, backgroundColor: Config.background }}>
    <Header title='Categories' />
    <CategoriesList />
  </View>
)
