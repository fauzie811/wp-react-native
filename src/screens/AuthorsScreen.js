import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Container from '../components/common/Container';
import AuthorList from '../components/AuthorList';

const AuthorsScreen = ({ navigation }) => (
  <Container>
    <AuthorList />
  </Container>
);

AuthorsScreen.navigationOptions = {
  tabBarLabel: 'Authors',
  tabBarIcon: ({ focused, tintColor }) => (
    Platform.OS === 'android' ?
    <Icon size={24} color={tintColor} name="md-people" /> :
    <Icon size={25} color={tintColor} name={focused ? 'ios-people' : 'ios-people-outline'} />
  ),
};

export default AuthorsScreen;
