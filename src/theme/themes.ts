export type LayoutKind = 'top' | 'sidebar' | 'cards';

export interface AppTheme {
  key: 'theme1' | 'theme2' | 'theme3';
  name: string;
  layout: LayoutKind;
  fonts: {
    base: string;
    heading: string;
  };
  colors: {
    bg: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    header: string;
    sidebar: string;
  };
  spacing: {
    unit: number;
  };
  radius: string;
  shadow: string;
}

export const theme1: AppTheme = {
  key: 'theme1',
  name: 'Theme 1 – Minimal',
  layout: 'top',
  fonts: {
    base: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif",
    heading: "'Inter', sans-serif"
  },
  colors: {
    bg: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    muted: '#64748b',
    primary: '#2563eb',
    header: '#ffffff',
    sidebar: '#f1f5f9'
  },
  spacing: { unit: 8 },
  radius: '10px',
  shadow: '0 6px 18px rgba(0,0,0,0.06)'
};

export const theme2: AppTheme = {
  key: 'theme2',
  name: 'Theme 2 – Dark + Sidebar',
  layout: 'sidebar',
  fonts: {
    base: "'Playfair Display', Georgia, serif",
    heading: "'Playfair Display', serif"
  },
  colors: {
    bg: '#0b1220',
    surface: '#121a2b',
    text: '#e5e7eb',
    muted: '#94a3b8',
    primary: '#f59e0b',
    header: '#0b1220',
    sidebar: '#0e172a'
  },
  spacing: { unit: 10 },
  radius: '6px',
  shadow: '0 10px 24px rgba(0,0,0,0.35)'
};

export const theme3: AppTheme = {
  key: 'theme3',
  name: 'Theme 3 – Colorful Cards',
  layout: 'cards',
  fonts: {
    base: "'Pacifico', cursive",
    heading: "'Pacifico', cursive"
  },
  colors: {
    bg: '#fff7ed',
    surface: '#fff',
    text: '#1f2937',
    muted: '#6b7280',
    primary: '#ec4899',
    header: '#ffe4e6',
    sidebar: '#fde68a'
  },
  spacing: { unit: 12 },
  radius: '18px',
  shadow: '0 12px 30px rgba(236,72,153,0.20)'
};

export const THEMES = [theme1, theme2, theme3] as const;

export const DEFAULT_THEME_KEY: AppTheme['key'] = 'theme1';
