import React from 'react';
import Heading from '@/design-system/Heading/Heading';
import Text from '@/design-system/Text/Text';
import { Rating, MapPin, Price } from '@/design-system/icons';
import { Restaurant } from '@/types/api';
import * as S from './RestaurantInfo.styles';

interface RestaurantInfoProps {
  /**
   * Restaurant data to display
   */
  restaurant: Restaurant;
}

/**
 * RestaurantInfo displays the main information about a restaurant including name, rating, address, and price
 */
const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  const { name, aggregateRatings, address, averagePrice } = restaurant;
  const ratingValue = aggregateRatings?.ratingValue;

  return (
    <S.InfoContainer>
      <S.RestaurantHeader>
        <Heading variant="h2" as="h1">
          {name}
        </Heading>
        {ratingValue && (
          <S.RatingContainer>
            <Rating variant="filled" size="s" />
            <Text variant="t1" weight="bold">
              {ratingValue}
            </Text>
          </S.RatingContainer>
        )}
      </S.RestaurantHeader>

      <S.RestaurantDetails>
        <S.AddressContainer>
          <MapPin size="s" />
          <S.AddressInfo>
            <Text variant="t2" color="semanticColorsTextSecondary">
              {address.street}
            </Text>
            <Text variant="t2" color="semanticColorsTextSecondary">
              ,
            </Text>
            <Text variant="t2" color="semanticColorsTextSecondary">
              {address.zipCode}
            </Text>
            <Text variant="t2" color="semanticColorsTextSecondary">
              ,
            </Text>
            <Text variant="t2" color="semanticColorsTextSecondary">
              {address.locality}
            </Text>
            <Text variant="t2" color="semanticColorsTextSecondary">
              ,
            </Text>
            <Text variant="t2" color="semanticColorsTextSecondary">
              {address.country}
            </Text>
          </S.AddressInfo>
        </S.AddressContainer>

        {averagePrice && (
          <S.PriceContainer>
            <Price size="s" />
            <S.PriceInfo>
              <Text variant="t2" color="semanticColorsTextSecondary">
                ≈
              </Text>
              <Text variant="t2" color="semanticColorsTextSecondary">
                {averagePrice.value}
              </Text>
              <S.PriceCurrency>
                <Text variant="t2" color="semanticColorsTextSecondary">
                  {averagePrice.currency}
                </Text>
              </S.PriceCurrency>
            </S.PriceInfo>
          </S.PriceContainer>
        )}
      </S.RestaurantDetails>
    </S.InfoContainer>
  );
};

export default RestaurantInfo;
