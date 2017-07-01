import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Container from '../components/common/Container';
import AuthorList from '../components/AuthorList';

const AuthorsScreen = ({ navigation }) => (
  <Container>
    <AuthorList />
  </Container>
);

AuthorsScreen.navigationOptions = {
  tabBarLabel: 'Authors',
  tabBarIcon: ({ tintColor }) =>
    <Icon size={24} color={tintColor} name="account-multiple-outline" />,
};

export default AuthorsScreen;
