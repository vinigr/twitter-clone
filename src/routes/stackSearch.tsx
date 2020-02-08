import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Search} from '../screens';

const Stack = createStackNavigator();

const StackSearch = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Página Inicial" component={Search} />
    </Stack.Navigator>
  );
};

export default StackSearch;
