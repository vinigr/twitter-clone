import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from './drawerContent';

import {useTheme} from '../core/ThemeProvider';

import TabBottom from './tabBottom';

import {light, dark} from '../styles/theme';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  const {theme} = useTheme();

  return (
    <NavigationContainer
      theme={{dark: theme === 'dark', colors: theme === 'dark' ? dark : light}}>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#c6cbef',
          width: '89%',
        }}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Tela Inicial"
          component={TabBottom}
          options={({route}) => {
            const gestureEnabled =
              route?.state?.routes[0]?.state?.index === 1 ? false : true;

            return {
              gestureEnabled: gestureEnabled,
            };
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
