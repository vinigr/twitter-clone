import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {useTheme} from '@react-navigation/native';

import styled from 'styled-components/native';

import IconFeather from 'react-native-vector-icons/Feather';

import OpenDrawer from '../components/OpenDrawer';

import TopTab from './topTabBarNotifications';

const Stack = createStackNavigator();

const StackSearch = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerLeft: () => <OpenDrawer navigationProps={navigation} />,
        headerRight: () => (
          <ButtonConfig onPress={() => {}}>
            <IconFeather name="settings" size={28} color={'#1da1f2'} />
          </ButtonConfig>
        ),
      }}>
      <Stack.Screen name="Notificações" component={TopTab} />
    </Stack.Navigator>
  );
};

export default StackSearch;

const ButtonConfig = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;
