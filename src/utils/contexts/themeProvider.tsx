/*
import { DEFAULT_THEME, themes } from '@configs/allThemes.ts';
import { PropsWithChildren, useEffect, useState } from 'react';
import { IMappedTheme, mapTheme } from '@interfaces/themeInterface.ts';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  /!**
   * Helper function to set a new theme
   *
   * @param {string} theme The name of the theme to be set
   *
   * @return {void}
   *!/
  const applyTheme = (theme: string): void => {
    const themeObject: IMappedTheme = mapTheme(themes[theme]);
    if (!themeObject) return;
    const root = document.documentElement;
    Object.keys(themeObject).forEach((property) => {
      if (property === 'name') {
        return;
      }
      root.style.setProperty(property, themeObject[property]);
    });
  };

  return <ThemeProvider value={{ theme, setTheme }}>{children}</ThemeProvider>;
};

//export const ThemeProvider:

/!*import React, { useEffect, useState } from 'react';
import Themes from '@configs/themes.json';
import { ThemeInterface } from '@interfaces/themeInterface.ts';
import config from '@root/config.json';*!/
/!*

export interface ThemeContextType {
  setTheme: (name: string) => string;
  theme: ThemeInterface;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, _setTheme] = useState<ThemeInterface>(Themes[0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    setTheme(savedTheme || config.theme);
  }, []);

  const setTheme = (name: string) => {
    const index = Themes.findIndex(
      (colorScheme) => colorScheme.name.toLowerCase() === name,
    );

    if (index === -1) {
      return `ThemeInfo '${name}' not found. Try 'theme ls' to see the list of available themes.`;
    }

    _setTheme(Themes[index]);

    localStorage.setItem('theme', name);

    return `ThemeInfo ${Themes[index].name} set successfully!`;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
react*!/
*/
