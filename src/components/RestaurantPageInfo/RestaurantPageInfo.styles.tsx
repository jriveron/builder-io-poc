import styled from '@emotion/styled';

export const RestaurantPageContainer = styled.div`
  border-radius: ${({ theme }) => theme.radii.coreRadiusXl};
  background-color: ${({ theme }) =>
    theme.colors.coreProductColorsNeutralsN000};
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.space.coreSpacing12}
    ${({ theme }) => theme.space.coreSpacing05}
    ${({ theme }) => theme.space.coreSpacing08};
`;

export const RestaurantSection = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.space.coreSpacing08};
  width: 100%;
  align-items: stretch;
  gap: ${({ theme }) => theme.space.coreSpacing01};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.coreRadiusL};
`;

export const MainImage = styled.img`
  aspect-ratio: 0.99;
  object-fit: cover;
  object-position: center;
  width: 172px;
  flex-shrink: 0;
  max-width: 100%;
`;

export const ImageGrid = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.coreSpacing01};
`;

export const ImageRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${({ theme }) => theme.space.coreSpacing01};
`;

export const GridImage = styled.img`
  aspect-ratio: 0.99;
  object-fit: cover;
  object-position: center;
  width: 84px;
  flex-shrink: 0;
`;

export const RestaurantInfo = styled.div`
  margin-top: ${({ theme }) => theme.space.coreSpacing08};
  width: 100%;
`;
export const RestaurantHeader = styled.div`
  align-items: start;
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.space.coreSpacing06};
  color: ${({ theme }) => theme.colors.semanticColorsTextPrimary};
  justify-content: start;
`;

export const RatingContainer = styled.div`
  padding-top: ${({ theme }) => theme.space.coreSpacing01};
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.space.coreSpacing01};
  white-space: nowrap;
  justify-content: start;
`;
export const RestaurantDetails = styled.div`
  align-items: stretch;
  display: flex;
  margin-top: ${({ theme }) => theme.space.coreSpacing06};
  width: 100%;
  flex-direction: column;
  white-space: nowrap;
  justify-content: start;
`;
export const AddressContainer = styled.div`
  align-items: center;
  align-self: start;
  display: flex;
  gap: ${({ theme }) => theme.space.coreSpacing03};
  justify-content: start;
`;

export const AddressInfo = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  gap: ${({ theme }) => theme.space.coreSpacing01};
  justify-content: start;
`;

export const PriceContainer = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${({ theme }) => theme.space.coreSpacing03};
  width: 100%;
  gap: ${({ theme }) => theme.space.coreSpacing03};
  justify-content: start;
`;

export const PriceInfo = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  gap: ${({ theme }) => theme.space.coreSpacing01};
  justify-content: start;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
`;

export const Section = styled.div`
  margin-top: ${({ theme }) => theme.space.coreSpacing08};
  width: 100%;
`;

export const SectionHeader = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.space.coreSpacing08};
  justify-content: space-between;
`;

export const ItemList = styled.div`
  align-items: center;
  overflow-x: auto;
  display: flex;
  margin-top: ${({ theme }) => theme.space.coreSpacing03};
  width: 100%;
  gap: ${({ theme }) => theme.space.coreSpacing05};
  justify-content: start;
`;

export const RestaurantCardWrapper = styled.div`
  width: 228px;
  flex-shrink: 0;
`;

export const ButtonDock = styled.div`
  border: 1px solid
    ${({ theme }) => theme.colors.semanticColorsBorderSubtleColor};
  background: ${({ theme }) =>
    theme.colors.semanticColorsModalPrimaryBackgroundColor};
  margin-top: ${({ theme }) => theme.space.coreSpacing11};
  width: 100%;
  padding: ${({ theme }) => theme.space.coreSpacing05}
    ${({ theme }) => theme.space.coreSpacing05}
    ${({ theme }) => theme.space.coreSpacing10};
`;
