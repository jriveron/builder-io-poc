import RestaurantCard from '@/design-system/RestaurantCard/RestaurantCard';
import { City, Restaurant } from '@/types/api';
import React from 'react';

import * as S from './RestaurantsList.styles';
import Heading from '@/design-system/Heading/Heading';

type RestaurantListProps = {
  restaurants: Restaurant[];
  cityName: City['name'];
};

const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  cityName,
}) => {
  return (
    <S.Wrapper>
      <Heading variant="h2" marginBottom="coreSpacing04">
        Restaurant in {cityName}
      </Heading>
      <S.Grid>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </S.Grid>
    </S.Wrapper>
  );
};

export default RestaurantList;
