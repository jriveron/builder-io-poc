import styled from '@emotion/styled';
import { mq } from '@/design-system/system/responsive';

export const GalleryContainer = styled.div`
  display: grid;
  height: 10.875rem; /* 174px */
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 0.25rem; /* 4px */
  border-radius: ${({ theme }) => theme.radii.coreRadiusL};
  overflow: hidden;

  ${mq.up('md')} {
    height: 20rem;
  }

  ${mq.up('lg')} {
    height: 24rem;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  background-color: ${({ theme }) =>
    theme.colors.semanticColorsImagePlaceholderBackground};
`;

export const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) =>
    theme.colors.semanticColorsImagePlaceholderBackground};

  &:nth-of-type(2) {
    grid-row: 1;
    grid-column: 3;
  }

  &:nth-of-type(3) {
    grid-row: 1;
    grid-column: 4;
  }

  &:nth-of-type(4) {
    grid-row: 2;
    grid-column: 3;
  }

  &:nth-of-type(5) {
    grid-row: 2;
    grid-column: 4;
  }
`;
