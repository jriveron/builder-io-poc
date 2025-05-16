import { mq } from '@/design-system/system';
import styled from '@emotion/styled';
import { containerPaddingStyle } from '../Container';

export const Wrapper = styled.div`
  ${containerPaddingStyle};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ theme }) => theme.space.coreSpacing08};

  ${mq.up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.up('lg')} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
