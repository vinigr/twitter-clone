import React from 'react';

import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

import {useTheme} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

const Tweet = ({item, navigation}) => {
  const {
    id,
    avatar,
    name,
    username,
    date,
    content,
    verified,
    likes,
    comments,
    retweets,
  } = item;
  const {colors, dark} = useTheme();

  return (
    <Wrapper onPress={() => navigation.navigate('Tweet', {id})}>
      <Avatar
        source={{
          uri: avatar,
        }}
      />
      <Main>
        <Header>
          <InfoName>
            <Name numberOfLines={1} ellipsizeMode="tail">
              {name}
            </Name>
            {verified && (
              <Icon
                name="check-decagram"
                size={20}
                color={dark ? '#fff' : '#1da1f2'}
              />
            )}

            <Username numberOfLines={1} ellipsizeMode="tail">
              @{username}
            </Username>
            <Date>· {date}</Date>
          </InfoName>
          <ButtonOptions>
            <Icon name="chevron-down" size={28} color={colors.border} />
          </ButtonOptions>
        </Header>
        <Content numberOfLines={7} ellipsizeMode="tail">
          {content}
        </Content>
        <WrapperInterations>
          <ButtonInteration>
            <IconEvilIcons name="comment" size={28} color={colors.border} />
            {comments !== 0 && <NumberInteration>{comments}</NumberInteration>}
          </ButtonInteration>
          <ButtonInteration>
            <IconEvilIcons name="retweet" size={30} color={colors.border} />
            {retweets !== 0 && <NumberInteration>{retweets}</NumberInteration>}
          </ButtonInteration>
          <ButtonInteration>
            <IconIonicons
              name="ios-heart-empty"
              size={24}
              color={colors.border}
            />
            {likes !== 0 && <NumberInteration>{likes}</NumberInteration>}
          </ButtonInteration>
          <ButtonInteration onPress={() => console.log('button')}>
            <IconEvilIcons
              name="share-google"
              size={28}
              color={colors.border}
            />
          </ButtonInteration>
        </WrapperInterations>
      </Main>
    </Wrapper>
  );
};

export default Tweet;

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.border};
`;

const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

const Main = styled.View`
  margin-left: 10px;
  justify-content: flex-start;
  width: 100%;
`;

const Header = styled.View`
  width: ${Dimensions.get('window').width - 85}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoName = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: ${Dimensions.get('window').width - 110}px;
`;

const Name = styled.Text`
  color: ${props => props.theme.text};
  font-weight: bold;
  font-size: 18px;
`;

const Username = styled.Text`
  color: ${props => props.theme.border};
  font-size: 16px;
  min-width: 30px;
  max-width: 19%;
  width: 70px;
  margin-left: 4px;
`;

const Date = styled.Text`
  color: ${props => props.theme.border};
  font-size: 16px;
`;

const Content = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
  width: ${Dimensions.get('window').width - 110}px;
  margin-bottom: 10px;
`;

const ButtonOptions = styled.TouchableOpacity`
  width: 30px;
`;

const WrapperInterations = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${Dimensions.get('window').width - 140}px;
`;

const ButtonInteration = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const NumberInteration = styled.Text`
  margin-left: 4px;
  color: ${props => props.theme.border};
`;
