import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {useTheme} from '@react-navigation/native';

import OpenDrawer from '../components/OpenDrawer';

import {Feed, DetailTweet} from '../screens';

const Stack = createStackNavigator();

const StackHome = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Página Inicial"
        component={Feed}
        options={{
          headerLeft: () => <OpenDrawer navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Tweet"
        component={DetailTweet}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackHome;
