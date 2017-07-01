import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Container from '../components/common/Container';
import CategoryList from '../components/CategoryList';

const CategoriesScreen = ({ navigation }) => (
  <Container>
    <CategoryList />
  </Container>
);

CategoriesScreen.navigationOptions = {
  tabBarLabel: 'Categories',
  tabBarIcon: ({ tintColor }) =>
    <Icon size={24} color={tintColor} name="view-sequential" />,
};

export default CategoriesScreen;
