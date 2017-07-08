import { StackNavigator } from 'react-navigation';

import config from '../config';
import MainNavigator from './MainNavigator';
import DetailScreen from '../screens/DetailScreen';

const AppNavigator = StackNavigator({
  Main: { screen: MainNavigator },
  Detail: { screen: DetailScreen },
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
