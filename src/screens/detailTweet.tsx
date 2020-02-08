import React from 'react';

import {StyleSheet, View} from 'react-native';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

import {useTheme} from '@react-navigation/native';

import {tweets} from '../data';

const DetailTweet = ({route}) => {
  const idTweet = route?.params.id;
  const {
    avatar,
    name,
    username,
    content,
    verified,
    retweets,
    likes,
  } = tweets.find(tweet => tweet.id === idTweet);

  const {colors, dark} = useTheme();

  return (
    <Wrapper>
      <Header>
        <HeaderStart>
          <Avatar
            source={{
              uri: avatar,
            }}
          />
          <View>
            <WrapperName>
              <Name>{name}</Name>
              {verified && (
                <Icon
                  name="check-decagram"
                  size={20}
                  color={dark ? '#fff' : '#1da1f2'}
                />
              )}
            </WrapperName>
            <Username>@{username}</Username>
          </View>
        </HeaderStart>
        <ButtonOptions>
          <Icon name="chevron-down" size={28} color={colors.border} />
        </ButtonOptions>
      </Header>
      <Content>{content}</Content>
      <Line />
      <Interations>
        {retweets !== 0 && (
          <Interation>
            <NumberInteration>{retweets}</NumberInteration>
            <TextInteration>Retweets</TextInteration>
          </Interation>
        )}
        {likes !== 0 && (
          <Interation>
            <NumberInteration>{likes}</NumberInteration>
            <TextInteration>Curtidas</TextInteration>
          </Interation>
        )}
      </Interations>
      <Line />
      <WrapperInterations>
        <ButtonInteration>
          <IconEvilIcons name="comment" size={30} color={colors.border} />
        </ButtonInteration>
        <ButtonInteration>
          <IconEvilIcons name="retweet" size={32} color={colors.border} />
        </ButtonInteration>
        <ButtonInteration>
          <IconIonicons
            name="ios-heart-empty"
            size={26}
            color={colors.border}
          />
        </ButtonInteration>
        <ButtonInteration onPress={() => console.log('button')}>
          <IconEvilIcons name="share-google" size={30} color={colors.border} />
        </ButtonInteration>
      </WrapperInterations>
      <Line />
    </Wrapper>
  );
};

export default DetailTweet;

const Wrapper = styled.View`
  padding: 10px 6px;
`;

const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const HeaderStart = styled.View`
  flex-direction: row;
`;

const WrapperName = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Name = styled.Text`
  color: ${props => props.theme.text};
  font-weight: bold;
  font-size: 18px;
  margin-right: 2px;
  margin-bottom: 4px;
`;

const Username = styled.Text`
  color: ${props => props.theme.border};
  font-size: 16px;
`;

const ButtonOptions = styled.TouchableOpacity`
  width: 30px;
`;

const Content = styled.Text`
  color: ${props => props.theme.text};
  font-size: 20px;
  margin-bottom: 10px;
`;

const Interations = styled.View`
  flex-direction: row;
  padding: 0 4px;
`;

const Interation = styled.View`
  flex-direction: row;
`;

const NumberInteration = styled.Text`
  color: ${props => props.theme.text};
  font-size: 18px;
  margin-right: 6px;
`;

const TextInteration = styled.Text`
  color: ${props => props.theme.border};
  font-size: 18px;
  margin-right: 10px;
`;

const Line = styled.View`
  height: ${StyleSheet.hairlineWidth}px;
  width: 100%;
  align-self: center;
  background-color: ${props => props.theme.border};
  margin: 14px 0;
`;

const WrapperInterations = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ButtonInteration = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
