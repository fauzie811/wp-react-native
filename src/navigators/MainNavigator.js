import { TabNavigator, TabBarBottom } from 'react-navigation';

import config from '../config';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import AuthorsScreen from '../screens/AuthorsScreen';
import SavedScreen from '../screens/SavedScreens';

const MainNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Categories: { screen: CategoriesScreen },
  Authors: { screen: AuthorsScreen },
  Saved: { screen: SavedScreen },
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: config.COLOR_PRIMARY,
    style: {
      backgroundColor: 'white',
      elevation: 8,
    }
  },
  navigationOptions: {
    title: 'WP React-Native'
  }
});

export default MainNavigator;
