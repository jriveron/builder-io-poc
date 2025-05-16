import React from 'react';

import { City } from '@/types/api';
import CityCard from '@/design-system/CityCard/CityCard';
import { Heading } from '@/design-system/Heading/Heading.styles';

import * as S from './CitiesList.styles';

type CitiesListProps = {
  cities: City[];
};

const CitiesList: React.FC<CitiesListProps> = ({ cities }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <Heading variant="h2" marginBottom="coreSpacing04">
          Explore our cities
        </Heading>
      </S.Header>
      <S.Grid>
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </S.Grid>
    </S.Wrapper>
  );
};

export default CitiesList;
