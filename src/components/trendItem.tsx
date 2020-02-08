import React from 'react';

import styled from 'styled-components/native';

import {useTheme} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Trend = ({item, openModal}) => {
  const {name, region, tweets} = item;
  const {colors} = useTheme();

  return (
    <Wrapper>
      <Header>
        <Description>Assunto do Momento em {region}</Description>
        <ButtonOptions onPress={openModal}>
          <Icon name="chevron-down" size={28} color={colors.border} />
        </ButtonOptions>
      </Header>
      <Name>{name}</Name>
      <Description>{tweets} Tweets</Description>
    </Wrapper>
  );
};

export default Trend;

const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 14px 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.border};
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Description = styled.Text`
  color: ${props => props.theme.border};
`;

const ButtonOptions = styled.TouchableOpacity`
  width: 28px;
  height: 24px;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-top: -4px;
`;
