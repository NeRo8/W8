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
      options={({navigation, route}) => ({
        headerTitle: 'Drinks',
        headerTitleStyle: {
          ...globalStyles.robotoRegular24,
        },
        headerRightContainerStyle: {
          paddingHorizontal: 16,
        },
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.58,
          shadowRadius: 20,

          elevation: 10,
        },
        headerRight: () => (
          <Icon
            name="filter"
            type="material-community"
            size={30}
            onPress={() => navigation.navigate('Filters')}
          />
        ),
      })}
    />
    <Stack.Screen
      name="Filters"
      component={FiltersScreen}
      options={({navigation, route}) => ({
        headerTitle: 'Filters',
        headerTitleStyle: {
          ...globalStyles.robotoRegular24,
        },
        headerRightContainerStyle: {
          paddingHorizontal: 16,
        },
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.58,
          shadowRadius: 20,

          elevation: 10,
        },
      })}
    />
  </Stack.Navigator>
);

export default AppNavigation;
