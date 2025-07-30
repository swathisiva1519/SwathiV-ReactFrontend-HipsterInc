import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { AppTheme, THEMES, DEFAULT_THEME_KEY } from './themes';

type ThemeContextValue = {
  theme: AppTheme;
  setThemeByKey: (key: AppTheme['key']) => void;
  isTransitioning: boolean;
};

const ThemeCtx = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'app_theme_key_v1';

const GlobalStyle = createGlobalStyle<{ $fade: boolean }>`
  :root {
    color-scheme: ${({ theme }) => (theme.key === 'theme2' ? 'dark' : 'light')};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.base};
    transition: background 280ms ease, color 280ms ease, font-family 280ms ease;
  }
  body::after {
    content: '';
    pointer-events: none;
    position: fixed; inset: 0;
    background: ${({ theme }) => theme.colors.bg};
    opacity: ${({ $fade }) => ($fade ? 1 : 0)};
    transition: opacity 220ms ease;
    z-index: 1;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  .sr-only {
    position: absolute;
    width: 1px; height: 1px;
    padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0, 0, 0, 0);
    white-space: nowrap; border: 0;
  }
`;

export const ThemeProviderRoot: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [key, setKey] = useState<AppTheme['key']>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as AppTheme['key'] | null;
      return stored ?? DEFAULT_THEME_KEY;
    } catch {
      return DEFAULT_THEME_KEY;
    }
  });
  const [isTransitioning, setTransitioning] = useState(false);

  const theme = useMemo(
    () => THEMES.find(t => t.key === key) ?? THEMES[0],
    [key]
  );

  const setThemeByKey = (k: AppTheme['key']) => {
    if (k === key) return;
    setTransitioning(true);
    setKey(k);
    try {
      localStorage.setItem(STORAGE_KEY, k);
    } catch {}
    setTimeout(() => setTransitioning(false), 250);
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as AppTheme['key'] | null;
      if (stored && !THEMES.some(t => t.key === stored)) {
        localStorage.removeItem(STORAGE_KEY);
        setKey(DEFAULT_THEME_KEY);
      }
    } catch {}
  }, []);

  const value: ThemeContextValue = { theme, setThemeByKey, isTransitioning };

  return (
    <ThemeCtx.Provider value={value}>
      <ThemeProvider theme={theme}>
        <GlobalStyle $fade={isTransitioning} />
        {children}
      </ThemeProvider>
    </ThemeCtx.Provider>
  );
};

export const useAppTheme = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useAppTheme must be used within ThemeProviderRoot');
  return ctx;
};
