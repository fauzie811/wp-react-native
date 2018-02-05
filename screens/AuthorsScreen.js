import React from 'react'
import { View } from 'react-native'

import Config from '../Config'
import Header from '../components/common/Header'
import AuthorsList from '../components/AuthorsList'

export default () => (
  <View style={{ flex: 1, backgroundColor: Config.background }}>
    <Header title='Authors' />
    <AuthorsList />
  </View>
)
