import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {ThemeProvider} from 'styled-components';

import {StatusBar} from 'react-native';

import {light, dark} from '../styles/theme';

import ThemeContext from './context';

const STORAGE_KEY = 'THEME';

type Props = {
  children: React.ReactNode;
};

export const useTheme = () => React.useContext(ThemeContext);

const ThemeContextProvider = ({children}: Props) => {
  const [theme, setTheme] = useState<String>();

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem(STORAGE_KEY);

      if (!data) {
        setTheme('light');
        await AsyncStorage.setItem(STORAGE_KEY, 'light');
        StatusBar.setBackgroundColor('#fff');
        StatusBar.setBarStyle('dark-content');
      } else {
        setTheme(data);
        if (theme === 'dark') {
          StatusBar.setBackgroundColor('#000');
          StatusBar.setBarStyle('light-content');
          return;
        }
        StatusBar.setBackgroundColor('#fff');
        StatusBar.setBarStyle('dark-content');
      }
    })();
  }, [theme]);

  const handleTheme = (color: string) => {
    if (color === 'light') {
      AsyncStorage.setItem(STORAGE_KEY, 'light');
      setTheme('light');
    } else {
      AsyncStorage.setItem(STORAGE_KEY, 'dark');
      setTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleTheme,
      }}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
