import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Container from '../components/common/Container';
import SavedPostList from '../components/SavedPostList';

const SavedScreen = ({ navigation }) => (
  <Container style={{ backgroundColor: '#eeeeee' }}>
    <SavedPostList navigation={navigation} />
  </Container>
);

SavedScreen.navigationOptions = {
  tabBarLabel: 'Saved',
  tabBarIcon: ({ focused, tintColor }) => (
    Platform.OS === 'android' ?
    <Icon size={24} color={tintColor} name="md-bookmark" /> :
    <Icon size={25} color={tintColor} name={focused ? 'ios-bookmark' : 'ios-bookmark-outline'} />
  ),
};

export default SavedScreen;
