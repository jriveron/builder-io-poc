import styled from '@emotion/styled';
import { containerPaddingStyle } from '../Container';

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space.coreSpacing04};
  margin-bottom: ${({ theme }) => theme.space.coreSpacing04};
  ${containerPaddingStyle};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.coreSpacing08};
  padding-bottom: ${({ theme }) => theme.space.coreSpacing08};
  ${containerPaddingStyle};

  overflow-x: scroll;
`;
