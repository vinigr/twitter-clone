import React from 'react';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import OpenDrawer from '../components/OpenDrawer';

const Search = ({navigation}) => {
  navigation.setOptions({
    header: () => (
      <Header>
        <OpenDrawer navigationProps={navigation} />
        <Input />
        <ButtonStar onPress={() => {}}>
          <IconFeather name="settings" size={28} color={'#1da1f2'} />
        </ButtonStar>
      </Header>
    ),
  });

  return <></>;
};

export default Search;

const Header = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.border};
`;

const ButtonStar = styled.TouchableOpacity`
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
