import React, {useState} from 'react';

import Modal from 'react-native-modal';

import styled from 'styled-components/native';

import {useTheme} from '@react-navigation/native';

import {FlatList} from 'react-native-gesture-handler';
import {RefreshControl} from 'react-native';

import Trend from '../components/trendItem';

import {trends} from '../data';

const Search = () => {
  const [visible, setVisible] = useState();
  const [loading, setLoading] = useState(false);

  const {dark} = useTheme();

  const simulateRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Wrapper>
        <FlatList
          data={trends}
          ListHeaderComponent={() => (
            <ImageMain
              imageStyle={dark && {opacity: 0.7}}
              source={{
                uri:
                  'https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370.jpg',
              }}>
              <DescriptionMain>
                <Topic>Turismo</Topic>
                <Date> · há 20 minutos</Date>
              </DescriptionMain>
              <TextMain numberOfLines={2} ellipsizeMode="tail">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit
              </TextMain>
            </ImageMain>
          )}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={simulateRefresh}
              colors={['#1da1f2']}
            />
          }
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => (
            <Trend item={item} openModal={() => setVisible(true)} />
          )}
        />
      </Wrapper>
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={100}
        animationOutTiming={100}
        onBackButtonPress={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        onSwipeComplete={() => setVisible(false)}
        style={{margin: 0}}
        isVisible={visible}
        backdropTransitionOutTiming={0}>
        <WrapperModal>
          <ButtonModal>
            <TextButton>Este assunto é spam</TextButton>
          </ButtonModal>
          <ButtonModal>
            <TextButton>Este assunto é abusivo ou prejudicial</TextButton>
          </ButtonModal>
          <ButtonModal>
            <TextButton>Este assunto é uma duplicação</TextButton>
          </ButtonModal>
          <ButtonModal>
            <TextButton>Este assunto é de baixa qualidade</TextButton>
          </ButtonModal>
        </WrapperModal>
      </Modal>
    </>
  );
};

export default Search;

const Wrapper = styled.View``;

const ImageMain = styled.ImageBackground`
  height: 250px;
  width: 100%;
  padding: 20px 10px;
  justify-content: flex-end;
`;

const DescriptionMain = styled.View`
  flex-direction: row;
`;

const Topic = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const Date = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const TextMain = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const WrapperModal = styled.View`
  align-self: center;
  background-color: ${props => props.theme.background};
  width: 80%;
  padding: 10px;
`;

const ButtonModal = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
`;

const TextButton = styled.Text`
  color: ${props => props.theme.text};
  font-size: 18px;
`;
