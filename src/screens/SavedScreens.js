import React from 'react';
import { View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SavedScreen = ({ navigation }) => (
  <View />
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
