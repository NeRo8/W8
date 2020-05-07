import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './navigation';

const App = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);

export default App;
