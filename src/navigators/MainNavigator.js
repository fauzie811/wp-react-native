import { TabNavigator, TabBarBottom } from 'react-navigation';

import config from '../config';
import HomeScreen from '../screens/HomeScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import AuthorsScreen from '../screens/AuthorsScreen';
import SavedScreen from '../screens/SavedScreens';

const tabsWithAuthors = {
  Home: { screen: HomeScreen },
  Categories: { screen: CategoryListScreen },
  Authors: { screen: AuthorsScreen },
  Saved: { screen: SavedScreen },
};
const tabsWithoutAuthors = {
  Home: { screen: HomeScreen },
  Categories: { screen: CategoryListScreen },
  Saved: { screen: SavedScreen },
};

const MainNavigator = TabNavigator(config.SHOW_AUTHORS ? tabsWithAuthors : tabsWithoutAuthors, {
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
    title: 'WP React-Native',
  }
});

export default MainNavigator;
