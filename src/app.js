import React from 'react';
import { View, StatusBar } from 'react-native';
import { useStrict } from 'mobx';
import { Provider, observer } from 'mobx-react/native';

import config from './config';
import stores from './stores';
import AppNavigator from './navigators/AppNavigator';

useStrict(true);

const App = observer(() => (
  <Provider {...stores}>
    <View style={{ flex: 1 }} >
      <StatusBar backgroundColor={config.COLOR_PRIMARY_DARK} barStyle="light-content" />
      <AppNavigator />
    </View>
  </Provider>
));

export default App;
