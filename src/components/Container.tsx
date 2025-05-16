import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const containerPaddingStyle = ({ theme }: { theme: Theme }) => {
  return css`
    padding-left: ${theme.space.coreSpacing08};
    padding-right: ${theme.space.coreSpacing08};
  `;
};

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 64rem;
  padding-top: ${({ theme }) => theme.space.coreSpacing11};
  padding-bottom: ${({ theme }) => theme.space.coreSpacing11};
`;
