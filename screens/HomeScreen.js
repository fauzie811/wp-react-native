import React from 'react'
import { View, Alert } from 'react-native'

import Config from '../Config'
import Header from '../components/common/Header'
import HeaderButton from '../components/common/HeaderButton'
import SearchBox from '../components/SearchBox'
import PostsList from '../components/PostsList'
import PostsSlider from '../components/PostsSlider'

export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: Config.background }}>
    <Header
      leftComponent={<SearchBox />}
      rightComponent={
        <HeaderButton
          iconName='ios-funnel-outline'
          onPress={() => Alert.alert('Not yet implemented', 'To be implemented.')}
        />
      }
    />
    <PostsList
      ListHeaderComponent={<PostsSlider navigation={navigation} />}
      navigation={navigation}
    />
  </View>
)
