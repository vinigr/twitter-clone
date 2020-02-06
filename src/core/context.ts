import {createContext} from 'react';

type ContextProps = {
  value: {
    theme: string;
    handleTheme: () => any;
  };
};

const ThemeContext = createContext<ContextProps | null>(null);

export default ThemeContext;
