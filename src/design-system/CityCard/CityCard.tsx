import React from 'react';

import * as S from './CityCard.styles';
import { City } from '@/types/api';
import Link from 'next/link';
import Heading from '@/design-system/Heading/Heading';

type CityCardProps = {
  city: City;
};

/**
 * Our city card used to represent a city.
 */
const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <S.Wrapper>
      <S.Photo src={city.photo} alt="" />
      <S.Content>
        <Heading variant="h3" color="semanticColorsTextPrimaryInverse">
          <Link href={`/city/${city.id}`} passHref>
            {city.name}
          </Link>
        </Heading>
      </S.Content>
    </S.Wrapper>
  );
};

export default CityCard;
