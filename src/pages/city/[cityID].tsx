import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';

import { Container, containerPaddingStyle } from '@/components/Container';
import SEO from '@/components/SEO';
import RestaurantList from '@/components/RestaurantsList/RestaurantsList';
import CitiesList from '@/components/CitiesList/CitiesList';
import { City, Restaurant } from '@/types/api';
import Callout from '@/design-system/Callout/Callout';
import Spinner from '@/design-system/Spinner/Spinner';
import { HStack } from '@/design-system/Stack/Stack';
import Button from '@/design-system/Button/Button';
import { ChevronLeft } from '@/design-system/icons';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';

export const GET_CITY_PAGE_DATA = gql`
  query GetCityPageData($cityID: ID!) {
    getRestaurants(cityID: $cityID) {
      id
      slug
      name
      photo
      bestOffer
      address {
        street
        zipCode
        locality
        country
      }
      averagePrice {
        value
        currency
      }
      aggregateRatings {
        ratingValue
        reviewCount
      }
    }
    getCities {
      id
      name
      photo
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  if (typeof query.cityID !== 'string') {
    return {
      notFound: true,
    };
  }

  return {
    props: { cityID: query.cityID },
  };
};

type CityPageProps = { cityID: string };

type GetCityPageDataQuery = {
  getRestaurants: Restaurant[];
  getCities: City[];
};

const Header = styled.div`
  ${containerPaddingStyle}
  margin-bottom: ${({ theme }) => theme.space.coreSpacing08};
`;

const CityPage: NextPage<CityPageProps> = ({ cityID }) => {
  const router = useRouter();

  const { loading, error, data } = useQuery<GetCityPageDataQuery>(
    GET_CITY_PAGE_DATA,
    {
      variables: { cityID },
    }
  );

  const cities = data?.getCities || [];
  const currentCity = cities.find((city) => city.id === cityID);
  const restaurants = data?.getRestaurants || [];
  const otherCities = cities.filter((city) => city.id !== currentCity?.id);

  const pageTitle = currentCity
    ? `Restaurants in ${currentCity.name}`
    : 'Loading...';
  const pageDescription = currentCity
    ? `Discover the best restaurants in ${currentCity.name}. Book a table online at TheFork.`
    : 'Find and book the best restaurants at TheFork.';

  return (
    <React.Fragment>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`https://www.thefork.com/city/${cityID}`}
        ogImage={currentCity?.photo}
      />
      <Container>
        {error ? (
          <Callout
            collapsible={false}
            intent="alert"
            description="Error loading data. Please try again later."
          />
        ) : loading ? (
          <HStack horizontalAlign="center">
            <Spinner aria-label="Loading the city information..." size="l" />
          </HStack>
        ) : currentCity ? (
          <React.Fragment>
            <Header>
              <Button
                hierarchy="tertiary"
                leadingIcon={() => <ChevronLeft />}
                onClick={() => router.back()}
              />
            </Header>
            <CitiesList cities={otherCities} />
            <RestaurantList
              restaurants={restaurants}
              cityName={currentCity.name}
            />
          </React.Fragment>
        ) : (
          <Callout
            collapsible={false}
            intent="warning"
            description="City not found. Please select a different city."
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export default CityPage;
