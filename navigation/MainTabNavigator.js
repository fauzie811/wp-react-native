import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Config from '../Config'

import HomeScreen from '../screens/HomeScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import AuthorsScreen from '../screens/AuthorsScreen'
import SavedScreen from '../screens/SavedScreen'
import AboutScreen from '../screens/AboutScreen'

const screens = {
  Home: { screen: HomeScreen },
  Categories: { screen: CategoriesScreen },
  Authors: { screen: AuthorsScreen },
  Saved: { screen: SavedScreen },
  About: { screen: AboutScreen }
}

if (!Config.showAuthors) {
  delete screens.Authors
}

export default TabNavigator(
  screens,
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Home':
            iconName = `ios-home${focused ? '' : '-outline'}`
            break
          case 'Categories':
            iconName = `ios-folder-open${focused ? '' : '-outline'}`
            break
          case 'Authors':
            iconName = `ios-people${focused ? '' : '-outline'}`
            break
          case 'Saved':
            iconName = `ios-bookmark${focused ? '' : '-outline'}`
            break
          case 'About':
            iconName = `ios-information-circle${focused ? '' : '-outline'}`
            break
        }
        return (
          <Ionicons
            name={iconName}
            size={26}
            style={{ marginBottom: -3 }}
            color={tintColor}
          />
        )
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      labelStyle: { fontSize: 12 },
      inactiveTintColor: '#aaa',
      activeTintColor: Config.colorPrimary,
      style: {
        backgroundColor: 'white',
        borderTopColor: '#ccc'
      }
    },
    animationEnabled: false,
    swipeEnabled: false
  }
)
