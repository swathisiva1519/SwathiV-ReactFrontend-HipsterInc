import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppTheme } from './theme/ThemeContext';
import { TopHeaderLayout } from './layouts/TopHeaderLayout';
import { SidebarLayout } from './layouts/SidebarLayout';
import { CardGridLayout } from './layouts/CardGridLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const LayoutChooser: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useAppTheme();
  if (theme.layout === 'sidebar') return <SidebarLayout>{children}</SidebarLayout>;
  if (theme.layout === 'cards') return <CardGridLayout>{children}</CardGridLayout>;
  return <TopHeaderLayout>{children}</TopHeaderLayout>;
};

const App: React.FC = () => {
  return (
    <LayoutChooser>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </LayoutChooser>
  );
};

export default App;
