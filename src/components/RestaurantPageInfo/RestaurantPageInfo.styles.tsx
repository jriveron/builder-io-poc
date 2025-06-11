import styled from '@emotion/styled';

export const RestaurantPageContainer = styled.div`
  border-radius: 24px;
  background-color: ${({ theme }) =>
    theme.colors.coreProductColorsNeutralsN000};
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;
  width: 100%;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 48px 21px 24px;
`;

export const RestaurantSection = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  align-items: stretch;
  gap: 4px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.coreRadiusL};
`;

export const LargeImage = styled.img`
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 172px;
  flex-shrink: 0;
  max-width: 100%;
`;

export const SmallImagesContainer = styled.div`
  flex: 1;
`;

export const SmallImagesRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 4px;

  &:not(:first-of-type) {
    margin-top: 4px;
  }
`;

export const SmallImage = styled.img`
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 84px;
  flex-shrink: 0;
`;

export const RestaurantInfo = styled.div`
  margin-top: 24px;
  width: 100%;
  font-family:
    ${({ theme }) => theme.typography.coreTypographyFontFamilyProduct},
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
`;

export const RestaurantHeader = styled.div`
  align-items: start;
  display: flex;
  width: 100%;
  gap: 16px;
  color: ${({ theme }) => theme.colors.semanticColorsTextPrimary};
  justify-content: start;
`;

export const RestaurantName = styled.div`
  font-size: 24px;
  font-weight: ${({ theme }) =>
    theme.typography.coreTypographyFontWeightExtraBold};
  line-height: ${({ theme }) =>
    theme.typography.coreTypographyLineHeightHeading};
  flex: 1;
`;

export const RatingContainer = styled.div`
  padding-top: 4px;
  align-items: center;
  display: flex;
  gap: 4px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.coreTypographyFontWeightBold};
  white-space: nowrap;
  justify-content: start;
`;

export const RatingIcon = styled.img`
  aspect-ratio: 1/1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
`;

export const RatingValue = styled.div`
  align-self: stretch;
  margin: auto 0;
`;

export const RestaurantDetails = styled.div`
  align-items: stretch;
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  font-size: ${({ theme }) => theme.typography.coreTypographyFontSizeTextT2};
  color: ${({ theme }) => theme.colors.semanticColorsTextSecondary};
  font-weight: ${({ theme }) =>
    theme.typography.coreTypographyFontWeightDefault};
  white-space: nowrap;
  justify-content: start;
`;

export const DetailContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: start;

  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

export const DetailIcon = styled.img`
  aspect-ratio: 1/1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
`;

export const DetailInfo = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin: auto 0;
  gap: 4px;
  justify-content: start;
  flex: 1;
`;

export const DetailText = styled.div`
  align-self: stretch;
  margin: auto 0;
`;

export const PriceSymbol = styled.div`
  align-self: stretch;
  margin: auto 0;
`;

export const PriceCurrency = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  align-self: stretch;
  margin: auto 0;
  flex: 1;
`;

export const ButtonDock = styled.div`
  border: 1px solid
    ${({ theme }) => theme.colors.semanticColorsBorderSubtleColor};
  background: ${({ theme }) =>
    theme.colors.semanticColorsModalPrimaryBackgroundColor};
  margin-top: 44px;
  width: 100%;
  padding: 12px 21px 32px;
`;
