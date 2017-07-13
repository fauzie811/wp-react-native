import { StackNavigator } from 'react-navigation';

import config from '../config';
import MainNavigator from './MainNavigator';
import DetailScreen from '../screens/DetailScreen';
import CategoryScreen from '../screens/CategoryScreen';

const AppNavigator = StackNavigator({
  Main: { screen: MainNavigator },
  Detail: { screen: DetailScreen },
  Category: { screen: CategoryScreen },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: config.COLOR_PRIMARY,
    },
    headerTintColor: 'white',
    headerBackTitle: null,
  },
});

export default AppNavigator;
