import React, {useState} from 'react';
import {
  DrawerContentComponentProps,
  DrawerNavigationProp,
  DrawerItem,
} from '@react-navigation/drawer';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {View, TouchableOpacity} from 'react-native';

import {useTheme} from '../core/ThemeProvider';

import profileDefault from '../assets/default-profile.jpg';
import {ScrollView} from 'react-native-gesture-handler';

type Props = DrawerContentComponentProps<DrawerNavigationProp>;

const DrawerContent = (props: Props) => {
  const [menuActive, setMenuActive] = useState<Boolean>(true);

  const {theme, handleTheme} = useTheme();

  return (
    <Wrapper menuActive={menuActive}>
      <Header>
        <ImageProfile source={profileDefault} />
        <WrapperHeaderInfo>
          <View>
            <ContrastName>Teste</ContrastName>
            <Description>@testando</Description>
            <InfoFollowers>
              <InfoItem>
                <Number>110</Number>
                <Description>Seguindo</Description>
              </InfoItem>
              <InfoItem>
                <Number>186</Number>
                <Description>Seguidores</Description>
              </InfoItem>
            </InfoFollowers>
          </View>
          <TouchableOpacity onPress={() => setMenuActive(!menuActive)}>
            {menuActive ? (
              <Icon name="chevron-down" color="#1da1f2" size={24} />
            ) : (
              <Icon name="chevron-up" color="#1da1f2" size={24} />
            )}
          </TouchableOpacity>
        </WrapperHeaderInfo>
      </Header>
      <Line style={{marginBottom: 0}} />
      {menuActive ? (
        <>
          <ScrollView>
            <ItemList
              label="Perfil"
              icon={() => <Icon name="home" color="#b4b4b4" size={30} />}
              onPress={() => {}}
            />
            <ItemList
              label="Listas"
              icon={() => (
                <Icon
                  name="file-document-box-outline"
                  color="#b4b4b4"
                  size={30}
                />
              )}
              onPress={() => {}}
            />
            <ItemList
              label="Tópicos"
              icon={() => <Icon name="sign-text" color="#b4b4b4" size={30} />}
              onPress={() => {}}
            />
            <ItemList
              label="Itens salvos"
              icon={() => (
                <Icon name="bookmark-outline" color="#b4b4b4" size={30} />
              )}
              onPress={() => {}}
            />
            <ItemList
              label="Moments"
              icon={() => (
                <Icon name="flash-outline" color="#b4b4b4" size={30} />
              )}
              onPress={() => {}}
            />
            <Line />
            <ItemList
              label="Anúncios do Twitter"
              icon={() => <Icon name="link" color="#b4b4b4" size={30} />}
              onPress={() => {}}
            />
            <Line />
            <ItemList label="Configurações e privacidade" onPress={() => {}} />
            <ItemList label="Central de Ajuda" onPress={() => {}} />
          </ScrollView>
          <Footer>
            <Button
              onPress={() => handleTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? (
                <Icon name="lightbulb-on-outline" color="#1da1f2" size={28} />
              ) : (
                <Icon name="lightbulb-outline" color="#1da1f2" size={28} />
              )}
            </Button>
            <Button>
              <Icon name="qrcode" color="#1da1f2" size={28} />
            </Button>
          </Footer>
        </>
      ) : (
        <View>
          <ItemListBlue label="Criar uma nova conta" onPress={() => {}} />
          <ItemListBlue
            label="Adicionar uma conta existente"
            onPress={() => {}}
          />
        </View>
      )}
    </Wrapper>
  );
};

export default DrawerContent;

const Wrapper = styled.View`
  flex: 1;
  justify-content: ${props =>
    props.menuActive ? 'space-between' : 'flex-start'};
  background-color: ${props => props.theme.background};
`;

const Header = styled.View`
  padding: 20px 16px 4px;
  margin-bottom: 16px;
`;

const ImageProfile = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-bottom: 8px;
`;

const WrapperHeaderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ContrastName = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

const Description = styled.Text`
  color: #b4b4b4;
  font-size: 16px;
`;

const InfoFollowers = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const InfoItem = styled.View`
  flex-direction: row;
  padding-right: 10px;
  align-items: center;
`;

const Number = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 4px;
  color: ${props => props.theme.text};
`;

const Footer = styled.View`
  padding: 0 14px;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 40px;
`;

const Line = styled.View`
  height: 0.5px;
  margin: 10px 0;
  background-color: ${props => props.theme.border};
`;

const ItemList = styled(DrawerItem).attrs(props => ({
  labelStyle: {
    fontSize: 18,
    color: props.theme.text,
  },
  itemStyle: {
    justifyContent: 'center',
    marginHorizontal: 0,
    backgroundColor: 'transparent',
    marginVertical: 0,
    paddingLeft: 6,
    paddingVertical: 6,
  },
}))``;

const ItemListBlue = styled(DrawerItem).attrs(props => ({
  labelStyle: {
    fontSize: 16,
    color: '#1da1f2',
  },
}))``;
