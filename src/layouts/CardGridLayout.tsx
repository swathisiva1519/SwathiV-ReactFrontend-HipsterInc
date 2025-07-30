import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const GridWrap = styled.main`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;

  @media (max-width: 1200px) { grid-template-columns: repeat(8, 1fr); }
  @media (max-width: 768px)  { grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 480px)  { grid-template-columns: repeat(2, 1fr); }
`;

const Panel = styled.section`
  grid-column: span 12;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 20px;
`;

export const CardGridLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <GridWrap>
      <Panel>{children}</Panel>
    </GridWrap>
  </>
);
