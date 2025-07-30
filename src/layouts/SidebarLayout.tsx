import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const Shell = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.sidebar};
  padding: 24px;
  display: flex; flex-direction: column; gap: 16px;
  position: sticky; top: 56px; height: calc(100vh - 56px);
  @media (max-width: 900px) {
    position: static; height: auto;
  }
`;

const Main = styled.main`
  padding: 24px;
`;

export const SidebarLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <Shell>
      <Sidebar>
        <strong>Navigation</strong>
        <span>• Curated links</span>
        <span>• Filters</span>
        <span>• Categories</span>
      </Sidebar>
      <Main>{children}</Main>
    </Shell>
  </>
);
