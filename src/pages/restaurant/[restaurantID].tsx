import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { Container } from '@/components/Container';
import SEO from '@/components/SEO';
import RestaurantGallery from '@/components/RestaurantGallery';
import RestaurantInfo from '@/components/RestaurantInfo';
import RelatedRestaurants from '@/components/RelatedRestaurants';
import { Restaurant, TopRestaurantResult } from '@/types/api';
import Callout from '@/design-system/Callout/Callout';
import Spinner from '@/design-system/Spinner/Spinner';
import { HStack } from '@/design-system/Stack/Stack';
import Button from '@/design-system/Button/Button';
import { ChevronLeft } from '@/design-system/icons';

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

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.coreSpacing08};
  width: 100%;
  max-width: 24.375rem; /* 390px - mobile-first design from Figma */
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.coreSpacing11} 1.3125rem
    ${({ theme }) => theme.space.coreSpacing08}; /* 21px sides from design */

  @media (min-width: 768px) {
    max-width: 48rem;
    padding: ${({ theme }) => theme.space.coreSpacing11}
      ${({ theme }) => theme.space.coreSpacing08}
      ${({ theme }) => theme.space.coreSpacing08};
  }

  @media (min-width: 1024px) {
    max-width: 64rem;
  }
`;
const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
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
  const topRestaurantsResults = data?.getTopRestaurants.find(({ city }) => {
    return city.name === restaurant?.address.locality;
  });
  const restaurantCity = topRestaurantsResults?.city;
  const otherRestaurants = topRestaurantsResults?.restaurants || [];

  const pageTitle = restaurant
    ? `Restaurant - ${restaurant.name}`
    : 'Loading...';
  const pageDescription = restaurant
    ? `Discover the restaurant ${restaurant.name}. Book a table online at TheFork.`
    : 'Find and book the best restaurants at TheFork.';

  const handleSeeMore = () => {
    if (restaurantCity) {
      router.push(`/city/${restaurantCity.id}`);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  // Create multiple restaurant images for gallery
  // In a real app, these would come from the API
  const restaurantImages = [
    restaurant?.photo ||
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
    restaurant?.photo ||
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=150&fit=crop',
    restaurant?.photo ||
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=200&h=150&fit=crop',
    restaurant?.photo ||
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=150&fit=crop',
    restaurant?.photo ||
      'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=200&h=150&fit=crop',
  ];

  return (
    <React.Fragment>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`https://www.thefork.com/restaurant/${restaurantID}`}
        ogImage={restaurant?.photo}
      />

      {error ? (
        <Container>
          <Callout
            collapsible={false}
            intent="alert"
            description="Error loading data. Please try again later."
          />
        </Container>
      ) : loading ? (
        <Container>
          <HStack horizontalAlign="center">
            <Spinner
              aria-label="Loading the restaurant information..."
              size="l"
            />
          </HStack>
        </Container>
      ) : restaurant && restaurantCity ? (
        <PageContainer>
          <BackButtonContainer>
            <Button
              hierarchy="tertiary"
              leadingIcon={() => <ChevronLeft />}
              onClick={handleGoBack}
              aria-label="Go back to previous page"
            />
          </BackButtonContainer>

          <RestaurantGallery
            images={restaurantImages}
            alt={`${restaurant.name} restaurant images`}
          />

          <RestaurantInfo restaurant={restaurant} />

          {otherRestaurants.length > 0 && (
            <RelatedRestaurants
              cityName={restaurantCity.name}
              restaurants={otherRestaurants}
              onSeeMore={handleSeeMore}
            />
          )}
        </PageContainer>
      ) : (
        <Container>
          <Callout
            collapsible={false}
            intent="warning"
            description="Restaurant not found. Please select a different restaurant."
          />
        </Container>
      )}
    </React.Fragment>
  );
};

export default RestaurantPage;
