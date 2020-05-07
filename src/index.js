import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './navigation';

import store from './redux';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  </Provider>
);

export default App;
