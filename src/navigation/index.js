import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/Home';
import FiltersScreen from '../screens/Filters';

import {globalStyles} from '../constants';

const Stack = createStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Coctailes"
      component={HomeScreen}
      options={{
        headerTitle: 'Drinks',
        headerTitleStyle: {
          ...globalStyles.robotoRegular24,
        },
        headerRightContainerStyle: {
          paddingHorizontal: 16,
        },
        headerRight: () => (
          <Icon name="filter" type="material-community" size={30} />
        ),
      }}
    />
    <Stack.Screen name="Filters" component={FiltersScreen} />
  </Stack.Navigator>
);

export default AppNavigation;
