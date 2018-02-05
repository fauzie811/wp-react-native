import { StackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import PostScreen from '../screens/PostScreen'

export default StackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    Post: {
      screen: PostScreen
    }
  },
  {
    navigationOptions: () => ({
      title: 'WP-ReactNative',
      header: null
      // headerStyle: {
      //   backgroundColor: Config.colorPrimary,
      //   borderBottomWidth: 0,
      //   elevation: 0,
      // },
      // headerTitleStyle: {
      //   color: 'white',
      //   alignSelf: 'center',
      // },
    })
  }
)
