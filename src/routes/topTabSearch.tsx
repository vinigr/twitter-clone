import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {useTheme} from '@react-navigation/native';

import {View} from 'react-native';

import {Search} from '../screens';

const Tab = createMaterialTopTabNavigator();

const Test = () => <View />;

const TopTabSearch = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      lazy
      tabBarOptions={{
        style: {backgroundColor: colors.background},
        scrollEnabled: true,
        pressColor: colors.input,
        activeTintColor: '#1da1f2',
        inactiveTintColor: colors.border,
        tabStyle: {
          width: 'auto',
        },
        labelStyle: {
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: 16,
        },
        indicatorStyle: {borderBottomColor: '#1da1f2', borderBottomWidth: 3},
      }}>
      <Tab.Screen component={Search} name="Para Você" />
      <Tab.Screen component={Test} name="Assuntos do Momento" />
      <Tab.Screen component={Test} name="Notícias" />
      <Tab.Screen component={Test} name="Esporte" />
      <Tab.Screen component={Test} name="Diversão" />
      <Tab.Screen component={Test} name="Entretenimento" />
    </Tab.Navigator>
  );
};

export default TopTabSearch;
