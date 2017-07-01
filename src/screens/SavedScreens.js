import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SavedScreen = ({ navigation }) => (
  <View />
);

SavedScreen.navigationOptions = {
  tabBarLabel: 'Saved',
  tabBarIcon: ({ tintColor }) =>
    <Icon size={24} color={tintColor} name="bookmark-outline" />,
};

export default SavedScreen;
