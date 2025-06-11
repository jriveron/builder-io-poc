import React from 'react';
import Text from '@/design-system/Text/Text';
import Button from '@/design-system/Button/Button';
import RestaurantCard from '@/design-system/RestaurantCard/RestaurantCard';
import { Restaurant } from '@/types/api';
import * as S from './RelatedRestaurants.styles';

interface RelatedRestaurantsProps {
  /**
   * City name for the section title
   */
  cityName: string;
  /**
   * Array of related restaurants to display
   */
  restaurants: Restaurant[];
  /**
   * Callback function when "See more" button is clicked
   */
  onSeeMore?: () => void;
}

/**
 * RelatedRestaurants displays a horizontal list of restaurant cards for related restaurants in the same city
 */
const RelatedRestaurants: React.FC<RelatedRestaurantsProps> = ({
  cityName,
  restaurants,
  onSeeMore,
}) => {
  return (
    <S.SectionContainer>
      <S.SectionHeader>
        <Text variant="t1" weight="bold">
          More restaurants in {cityName}
        </Text>
        <Button
          hierarchy="ghost-compact"
          onClick={onSeeMore || (() => {})}
          aria-label={`See more restaurants in ${cityName}`}
        >
          See more
        </Button>
      </S.SectionHeader>

      <S.RestaurantsList>
        {restaurants.map((restaurant) => (
          <S.RestaurantCardWrapper key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </S.RestaurantCardWrapper>
        ))}
      </S.RestaurantsList>
    </S.SectionContainer>
  );
};

export default RelatedRestaurants;
