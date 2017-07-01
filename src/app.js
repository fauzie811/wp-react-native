import React from 'react';
import { View, StatusBar } from 'react-native';

import config from './config';
import AppNavigator from './navigators/AppNavigator';

const App = () => (
  <View style={{ flex: 1 }} >
    <StatusBar backgroundColor={config.COLOR_PRIMARY_DARK} barStyle="light-content" />
    <AppNavigator />
  </View>
);

export default App;
