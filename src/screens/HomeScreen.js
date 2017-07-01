import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Container from '../components/common/Container';
import HomeList from '../components/HomeList';

const HomeScreen = () => (
  <Container>
    <HomeList />
  </Container>
);

HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) =>
    <Icon size={24} color={tintColor} name="home-outline" />,
};

export default HomeScreen;
