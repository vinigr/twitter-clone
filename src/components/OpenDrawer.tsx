import React from 'react';

import {DrawerNavigationProp} from '@react-navigation/drawer';

import styled from 'styled-components/native';

import profileDefault from '../assets/default-profile.jpg';

type Props = {
  navigationProps: () => any;
};

const OpenDrawer = ({navigationProps}: Props) => {
  return (
    <Button
      onPress={() => {
        ((navigationProps as any) as DrawerNavigationProp<{}>).openDrawer();
      }}>
      <ImageProfile source={profileDefault} />
    </Button>
  );
};

export default OpenDrawer;

const Button = styled.TouchableOpacity`
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 60px;
`;

const ImageProfile = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
