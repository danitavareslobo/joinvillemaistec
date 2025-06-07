export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  paper: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  accent: string;
  success: string;
  warning: string;
  error: string;
  border: string;
  shadow: string;
}

export const lightTheme: ThemeColors = {
  primary: '#c2a39a',
  secondary: '#e1d1c8',
  background: '#faf8f7',
  surface: '#ffffff',
  paper: '#f5f1ef',
  text: {
    primary: '#3e2723',
    secondary: '#5d4037',
    disabled: '#8d6e63',
  },
  accent: '#8bc34a',
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  border: '#d7ccc8',
  shadow: 'rgba(62, 39, 35, 0.1)',
};

export const darkTheme: ThemeColors = {
  primary: '#001600',
  secondary: '#0a3007',
  background: '#0d1f0a',
  surface: '#1b2f18',
  paper: '#0f2b0c',
  text: {
    primary: '#e8f5e8',
    secondary: '#c8e6c9',
    disabled: '#81c784',
  },
  accent: '#66bb6a',
  success: '#4caf50',
  warning: '#ffa726',
  error: '#ef5350',
  border: '#2e7d32',
  shadow: 'rgba(0, 22, 0, 0.3)',
};

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
}

export const getTheme = (mode: ThemeMode): Theme => ({
  mode,
  colors: mode === 'light' ? lightTheme : darkTheme,
});

export const themes = {
  light: getTheme('light'),
  dark: getTheme('dark'),
};