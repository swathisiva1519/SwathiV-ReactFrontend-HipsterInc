import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 16px;
  border: 0;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => (theme.key === 'theme2' ? '#0b1220' : '#fff')};
  cursor: pointer;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 120ms ease, opacity 120ms ease;
  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); opacity: 0.9; }
`;

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 16px;
  display: flex; flex-direction: column; gap: 12px;
`;
