import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import styled from 'styled-components/native';

import IconFeather from 'react-native-vector-icons/Feather';

import OpenDrawer from '../components/OpenDrawer';

import TopTab from './topTabSearch';

const Stack = createStackNavigator();

const StackSearch = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <Header>
            <OpenDrawer navigationProps={navigation} />
            <Input />
            <ButtonConfig onPress={() => {}}>
              <IconFeather name="settings" size={28} color={'#1da1f2'} />
            </ButtonConfig>
          </Header>
        ),
      }}>
      <Stack.Screen name="Página Inicial" component={TopTab} />
    </Stack.Navigator>
  );
};

export default StackSearch;

const Header = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonConfig = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput.attrs(props => ({
  placeholder: 'Busca do Twitter',
  placeholderTextColor: props.theme.border,
}))`
  height: 40px;
  width: 70%;
  padding: 10px 16px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: ${props => props.theme.input};
`;
