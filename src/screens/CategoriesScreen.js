import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Container from '../components/common/Container';
import CategoryList from '../components/CategoryList';

const CategoriesScreen = ({ navigation }) => (
  <Container>
    <CategoryList />
  </Container>
);

CategoriesScreen.navigationOptions = {
  tabBarLabel: 'Categories',
  tabBarIcon: ({ focused, tintColor }) => (
    Platform.OS === 'android' ?
    <Icon size={24} color={tintColor} name="md-apps" /> :
    <Icon size={25} color={tintColor} name={focused ? 'ios-apps' : 'ios-apps-outline'} />
  ),
};

export default CategoriesScreen;
