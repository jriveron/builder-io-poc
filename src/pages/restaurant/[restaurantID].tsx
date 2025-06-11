import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';

import { Container, containerPaddingStyle } from '@/components/Container';
import SEO from '@/components/SEO';
import TopRestaurantsList from '@/components/TopRestaurantsList/TopRestaurantsList';
import RestaurantPageInfo from '@/components/RestaurantPageInfo/RestaurantPageInfo';
import { Restaurant, TopRestaurantResult } from '@/types/api';
import Callout from '@/design-system/Callout/Callout';
import Spinner from '@/design-system/Spinner/Spinner';
import { HStack } from '@/design-system/Stack/Stack';
import Button from '@/design-system/Button/Button';
import { ChevronLeft } from '@/design-system/icons';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import Heading from '@/design-system/Heading/Heading';

export const GET_RESTAURANT_PAGE_DATA = gql`
  query GetRestaurantPageData($restaurantID: ID!) {
    getRestaurant(restaurantID: $restaurantID) {
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
    getTopRestaurants {
      city {
        id
        name
        photo
      }
      restaurants {
        id
        slug
        name
        photo
        aggregateRatings {
          ratingValue
        }
        address {
          locality
          street
        }
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  if (typeof query.restaurantID !== 'string') {
    return {
      notFound: true,
    };
  }

  return {
    props: { restaurantID: query.restaurantID },
  };
};

type RestaurantPageProps = { restaurantID: string };

type GetRestaurantDataQuery = {
  getRestaurant: Restaurant;
  getTopRestaurants: [TopRestaurantResult];
};

const Header = styled.div`
  ${containerPaddingStyle}
  margin-bottom: ${({ theme }) => theme.space.coreSpacing08};
`;

const RestaurantPage: NextPage<RestaurantPageProps> = ({ restaurantID }) => {
  const router = useRouter();

  const { loading, error, data } = useQuery<GetRestaurantDataQuery>(
    GET_RESTAURANT_PAGE_DATA,
    {
      variables: { restaurantID },
    }
  );

  const restaurant = data?.getRestaurant;
  const topRestaurantsResults = data?.getTopRestaurants?.find(({ city }) => {
    return city.name === restaurant?.address?.locality;
  });
  const restaurantCity = topRestaurantsResults?.city;
  const otherRestaurants = topRestaurantsResults?.restaurants;

  const pageTitle = restaurant
    ? `Restaurant - ${restaurant.name}`
    : 'Loading...';
  const pageDescription = restaurant
    ? `Discover the restaurant ${restaurant.name}. Book a table online at TheFork.`
    : 'Find and book the best restaurants at TheFork.';

  const handleBookNow = () => {
    // TODO: Implement booking functionality
    console.log('Book now clicked for restaurant:', restaurant?.name);
  };

  return (
    <React.Fragment>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`https://www.thefork.com/resturant/${restaurantID}`}
        ogImage={restaurant?.photo}
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
        ) : restaurant && restaurantCity ? (
          <React.Fragment>
            <Header>
              {restaurantCity && (
                <Button
                  hierarchy="tertiary"
                  leadingIcon={() => <ChevronLeft />}
                  onClick={() => router.back()}
                />
              )}
            </Header>
            <RestaurantPageInfo
              restaurantName={restaurant?.name}
              rating={restaurant?.aggregateRatings?.ratingValue}
              address={restaurant?.address?.street}
              zipcode={restaurant?.address?.zipCode}
              locality={restaurant?.address?.locality}
              country={restaurant?.address?.country}
              averagePriceValue={restaurant?.averagePrice?.value?.toString()}
              averagePriceCurrency={restaurant?.averagePrice?.currency}
              images={{
                main: restaurant?.photo,
                gallery: [
                  restaurant?.photo,
                  restaurant?.photo,
                  restaurant?.photo,
                  restaurant?.photo,
                ],
              }}
              onBookNow={handleBookNow}
            />
            {otherRestaurants && otherRestaurants.length > 0 && (
              <TopRestaurantsList
                city={restaurantCity}
                restaurants={otherRestaurants}
              />
            )}
          </React.Fragment>
        ) : (
          <Callout
            collapsible={false}
            intent="warning"
            description="Restaurant not found. Please select a different restaurant."
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export default RestaurantPage;
