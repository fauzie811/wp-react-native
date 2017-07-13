import { StackNavigator } from 'react-navigation';

import CategoryListScreen from '../screens/CategoryListScreen';
import CategoryScreen from '../screens/CategoryScreen';

export default StackNavigator({
  CategoryList: { screen: CategoryListScreen },
  Category: { screen: CategoryScreen },
}, {
  navigationOptions: {},
  headerMode: 'none',
});
