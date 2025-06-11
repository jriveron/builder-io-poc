import styled from '@emotion/styled';
import { mq } from '@/design-system/system/responsive';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.coreSpacing04};
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.coreSpacing08};
`;

export const RestaurantsList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.coreSpacing05};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar on modern browsers */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${mq.up('md')} {
    overflow-x: visible;
    flex-wrap: wrap;
  }
`;

export const RestaurantCardWrapper = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 14.25rem; /* 228px - matching the design */

  ${mq.up('md')} {
    flex: 1 1 auto;
    min-width: 14.25rem;
    max-width: calc(50% - ${({ theme }) => theme.space.coreSpacing05} / 2);
  }

  ${mq.up('lg')} {
    max-width: calc(
      33.333% - ${({ theme }) => theme.space.coreSpacing05} * 2 / 3
    );
  }
`;
