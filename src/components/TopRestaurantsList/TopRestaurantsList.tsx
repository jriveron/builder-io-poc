import RestaurantCard from '@/design-system/RestaurantCard/RestaurantCard';
import { City, Restaurant } from '@/types/api';
import React from 'react';

import * as S from './TopRestaurantsList.styles';
import Text from '@/design-system/Text/Text';
import Button from '@/design-system/Button/Button';
import Link from 'next/link';

type TopRestaurantsListProps = {
  restaurants: Restaurant[];
  city: City;
};

const TopRestaurantsList: React.FC<TopRestaurantsListProps> = ({
  restaurants,
  city,
}) => {
  return (
    <S.Wrapper>
      <S.Header>
        <Text variant="t1" weight="bold">
          Best restaurants in {city.name}
        </Text>
        <Link href={`/city/${city.id}`}>
          <Button hierarchy="ghost-compact" onClick={() => {}}>
            See more
          </Button>
        </Link>
      </S.Header>
      <S.Grid>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </S.Grid>
    </S.Wrapper>
  );
};

export default TopRestaurantsList;
