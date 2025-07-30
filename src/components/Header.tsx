import React from 'react';
import styled from 'styled-components';
import { useAppTheme } from '../theme/ThemeContext';
import { THEMES } from '../theme/themes';
import { Link, useLocation } from 'react-router-dom';

const HeaderBar = styled.header`
  position: sticky; top: 0; z-index: 10;
  background: ${({ theme }) => theme.colors.header};
  backdrop-filter: saturate(120%) blur(6px);
  border-bottom: 1px solid rgba(0,0,0,0.08);
  display: flex; align-items: center; justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.unit}px calc(${({ theme }) => theme.spacing.unit}px * 2);
`;

const Brand = styled.div`
  display: flex; align-items: center; gap: 12px; font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Nav = styled.nav`
  display: flex; align-items: center; gap: 16px;
  a { opacity: 0.9; }
  a.active { text-decoration: underline; }
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid rgba(0,0,0,0.15);
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
`;

export const Header: React.FC = () => {
  const { theme, setThemeByKey } = useAppTheme();
  const location = useLocation();
  return (
    <HeaderBar>
      <Brand>
        <span role="img" aria-label="logo">🎨</span> Multi-Theme Switcher
      </Brand>

      <Nav aria-label="Main">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>

        <label aria-label="Select Theme" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="sr-only">Theme</span>
          <Select
            value={theme.key}
            onChange={(e) => setThemeByKey(e.target.value as any)}
          >
            {THEMES.map(t => (<option key={t.key} value={t.key}>{t.name}</option>))}
          </Select>
        </label>
      </Nav>
    </HeaderBar>
  );
};
