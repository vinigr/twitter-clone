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
      <Tab.Screen component={Teste} name="Para Você" />
      <Tab.Screen component={Teste} name="Assuntos do Momento" />
      <Tab.Screen component={Teste} name="Notícias" />
      <Tab.Screen component={Teste} name="Esporte" />
      <Tab.Screen component={Teste} name="Diversão" />
      <Tab.Screen component={Teste} name="Entretenimento" />
    </Tab.Navigator>
  );
};

export default TopTabSearch;
