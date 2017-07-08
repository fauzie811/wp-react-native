import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Container from '../components/common/Container';
import HomeList from '../components/HomeList';
import ToolbarButton from '../components/common/ToolbarButton';

const HomeScreen = ({ navigation }) => (
  <Container>
    <HomeList navigation={navigation} />
  </Container>
);

HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) =>
    <Icon size={24} color={tintColor} name="home-outline" />,
  headerRight: (
    <ToolbarButton
      icon={<Icon size={24} color="white" name="magnify" />}
      onPress={() => {}}
    />
  )
};

export default HomeScreen;
