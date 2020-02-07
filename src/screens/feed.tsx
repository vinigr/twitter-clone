import React, {useState} from 'react';
import Modal from 'react-native-modal';

import {FlatList, RefreshControl} from 'react-native';

import {useTheme} from '@react-navigation/native';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {tweets} from '../data';

import Tweet from '../components/tweet';

const Feed = ({navigation}) => {
  const [visible, setVisible] = useState();
  const [loading, setLoading] = useState(false);

  const {colors} = useTheme();

  navigation.setOptions({
    headerRight: () => (
      <ButtonStar onPress={() => setVisible(true)}>
        <Icon name="star-four-points-outline" size={30} color={'#1da1f2'} />
      </ButtonStar>
    ),
  });

  const simulateRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <FlatList
        data={tweets}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={simulateRefresh}
            colors={['#1da1f2']}
          />
        }
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => <Tweet item={item} navigation={navigation} />}
      />
      <Modal
        swipeDirection="down"
        onBackButtonPress={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        onSwipeComplete={() => setVisible(false)}
        style={{width: '100%', margin: 0}}
        isVisible={visible}
        backdropTransitionOutTiming={0}>
        <WrapperModal>
          <DragView />
          <Icon name="star-four-points" size={60} color={'#1da1f2'} />
          <TextMainModal>
            A página inicial mostra os Tweets em Destaque primeiro
          </TextMainModal>
          <Line />
          <ButtonModal>
            <Icon name="swap-horizontal" size={30} color={colors.border} />
            <OptionContent>
              <TitleOption>Ver os Tweets mais recentes</TitleOption>
              <DescriptionOption>
                Você voltara à Página Inicial depois de ficar ausente por um
                tempo
              </DescriptionOption>
            </OptionContent>
          </ButtonModal>
          <ButtonModal>
            <Icon name="settings-outline" size={30} color={colors.border} />
            <OptionContent>
              <TitleOption>Ver preferências de conteudo</TitleOption>
            </OptionContent>
          </ButtonModal>
        </WrapperModal>
      </Modal>
    </>
  );
};

export default Feed;

const WrapperModal = styled.View`
  height: 300px;
  width: 100%;
  padding: 4px 0 10px;
  bottom: 0;
  position: absolute;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

const ButtonStar = styled.TouchableOpacity`
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 50px;
`;

const DragView = styled.View`
  height: 6px;
  width: 44px;
  border-radius: 20px;
  margin-bottom: 16px;
  background-color: #bfbfbf;
`;

const TextMainModal = styled.Text`
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  margin: 0 10px;
  color: ${props => props.theme.text};
`;

const Line = styled.View`
  height: 0.5px;
  width: 100%;
  margin: 10px 0;
  background-color: ${props => props.theme.border};
`;

const ButtonModal = styled.TouchableOpacity`
  height: 60px;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  padding: 6px 20px;
  margin-bottom: 20px;
`;

const OptionContent = styled.View`
  margin-left: 10px;
`;

const TitleOption = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.text};
`;

const DescriptionOption = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.border};
`;
