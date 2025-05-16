import React from 'react';

import Text from '@/design-system/Text/Text';
import { MapPin, Rating } from '@/design-system/icons';
import { Restaurant } from '@/types/api';
import * as S from './RestaurantCard.styles';
import Link from 'next/link';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

/**
 * Our restaurant card used to represent a restaurant.
 */
const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const ratingValue = restaurant.aggregateRatings?.ratingValue;
  const street = restaurant.address.street;
  const locality = restaurant.address.locality;

  return (
    <S.Wrapper>
      <S.PhotoWrapper>
        <S.Photo src={restaurant.photo} alt="" />
      </S.PhotoWrapper>
      <S.Content>
        <S.Header>
          <Text variant="t2" weight="bold" as="h3">
            <Link href={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
          </Text>
          {ratingValue && (
            <S.Rating>
              <Rating variant="filled" size="s" />
              <Text variant="t3" weight="bold">
                {restaurant.aggregateRatings?.ratingValue}
              </Text>
            </S.Rating>
          )}
        </S.Header>
        {street && locality && (
          <S.Address>
            <MapPin size="s" />
            <Text variant="t3">
              {restaurant.address.street}, {restaurant.address.locality}
            </Text>
          </S.Address>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default RestaurantCard;
