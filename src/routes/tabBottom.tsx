import React, {useEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {useTheme} from '@react-navigation/native';

import styled from 'styled-components/native';

import {View, Text, Animated} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StackHome from './stackHome';

const Tab = createMaterialBottomTabNavigator();

const Teste = () => (
  <View>
    <Text>Teste</Text>
    <Icon name="plus" size={28} color="#000" />
  </View>
);

const TabBottom = props => {
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Feed';

  const [previousRoute, setPreviousRoute] = useState(routeName);

  const {colors} = useTheme();

  useEffect(() => {
    if (routeName !== 'Mensagens' && previousRoute !== 'Mensagens') {
      return setPreviousRoute(routeName);
    }

    routeName === 'Mensagens' && animatedValue.setValue(0);
    previousRoute === 'Mensagens' && animatedValue.setValue(1);

    Animated.timing(animatedValue, {
      toValue: routeName === 'Mensagens' ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setPreviousRoute(routeName);
    }, 200);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeName]);

  const animatedValue = new Animated.Value(0);

  const interpolateRotate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{rotate: interpolateRotate}],
  };

  return (
    <>
      <Tab.Navigator
        labeled={false}
        barStyle={{
          backgroundColor: colors.background,
        }}
        activeColor="#1da1f2"
        inactiveColor={colors.border}>
        <Tab.Screen
          name="Home"
          component={StackHome}
          options={{
            tabBarIcon: ({color, focused}) => {
              if (focused) {
                return <Icon name="home" size={28} color={color} />;
              }
              return <Icon name="home-outline" size={28} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Teste}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="magnify" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notificações"
          component={Teste}
          options={{
            tabBarIcon: ({color, focused}) => {
              if (focused) {
                return <Icon name="bell" size={28} color={color} />;
              }
              return <Icon name="bell-outline" size={28} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Mensagens"
          component={Teste}
          options={{
            tabBarIcon: ({color, focused}) => {
              if (focused) {
                return <Icon name="email" size={28} color={color} />;
              }
              return <Icon name="email-outline" size={28} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
      <StyledAnimatedButton style={animatedStyle}>
        <Icon
          name={routeName === 'Mensagens' ? 'email-plus-outline' : 'feather'}
          size={30}
          color="#fff"
        />
      </StyledAnimatedButton>
    </>
  );
};

export default TabBottom;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  position: absolute;
  bottom: 80px;
  right: 20px;
  background-color: #1da1f2;
`;

const StyledAnimatedButton = Animated.createAnimatedComponent(Button);
