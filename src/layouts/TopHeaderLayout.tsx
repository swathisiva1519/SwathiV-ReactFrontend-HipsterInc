import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const Main = styled.main`
  max-width: 1000px; margin: 0 auto;
  padding: calc(${({ theme }) => theme.spacing.unit}px * 3) ${({ theme }) => theme.spacing.unit}px;
`;

const Container = styled.div`
  display: flex; flex-direction: column; min-height: 100vh;
`;

const Footer = styled.footer`
  margin-top: auto; opacity: 0.8;
  padding: 24px; text-align: center;
`;

export const TopHeaderLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
    <Footer>© Hipster Pte. Ltd.</Footer>
  </Container>
);
