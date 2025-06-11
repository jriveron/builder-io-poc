import styled from '@emotion/styled';
import { mq } from '@/design-system/system/responsive';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.coreSpacing06};
`;

export const RestaurantHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.coreSpacing06};

  ${mq.up('md')} {
    align-items: center;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem; /* 4px - specific spacing from design */
  padding-top: ${({ theme }) => theme.space.coreSpacing02};
`;

export const RestaurantDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.coreSpacing04};
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.coreSpacing04};
`;

export const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.coreSpacing02};
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.coreSpacing04};
`;

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.coreSpacing02};
  flex: 1;
`;

export const PriceCurrency = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
