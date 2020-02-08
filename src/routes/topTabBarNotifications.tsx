import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {useTheme} from '@react-navigation/native';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const Teste = () => (
  <View>
    <Text>Teste</Text>
    <Icon name="plus" size={28} color="#000" />
  </View>
);

const TopTabNotifications = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      lazy
      tabBarOptions={{
        style: {backgroundColor: colors.background},
        pressColor: colors.input,
        activeTintColor: '#1da1f2',
        inactiveTintColor: colors.border,
        labelStyle: {
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: 16,
        },
        indicatorStyle: {borderBottomColor: '#1da1f2', borderBottomWidth: 3},
      }}>
      <Tab.Screen component={Teste} name="Todos" />
      <Tab.Screen component={Teste} name="Menções" />
    </Tab.Navigator>
  );
};

export default TopTabNotifications;
