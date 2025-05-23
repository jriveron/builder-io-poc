import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Heading } from '../../design-system/Heading/Heading';
import { Text } from '../../design-system/Text/Text';
import { VStack } from '../../design-system/Stack/VStack/VStack';
import { HStack } from '../../design-system/Stack/HStack/HStack';
import { Spinner } from '../../design-system/Spinner/Spinner';
import { Button } from '../../design-system/Button/Button';
import { Skeleton } from '../../design-system/Skeleton/Skeleton';
import { CollapsibleText } from '../../design-system/CollapsibleText/CollapsibleText';
import { RestaurantCard } from '../../design-system/RestaurantCard/RestaurantCard';
import { Container } from '../../components/Container';
import { SEO } from '../../components/SEO';
import { RestaurantsList } from '../../components/RestaurantsList/RestaurantsList';

import {
  Star,
  Location,
  Phone,
  Globe,
  Time,
  ArrowLeft,
} from '../../design-system/icons';

const GET_RESTAURANT = gql`
  query GetRestaurant($id: ID!) {
    restaurant(id: $id) {
      id
      name
      description
      rating
      reviewCount
      priceRange
      cuisine
      address
      city
      phone
      website
      openingHours
      images {
        url
        alt
      }
      menu {
        id
        name
        description
        price
      }
      similarRestaurants {
        id
        name
        rating
        reviewCount
        priceRange
        cuisine
        address
        city
        mainImage {
          url
          alt
        }
      }
    }
  }
`;

interface RestaurantData {
  restaurant: {
    id: string;
    name: string;
    description: string;
    rating: number;
    reviewCount: number;
    priceRange: string;
    cuisine: string;
    address: string;
    city: string;
    phone: string;
    website: string;
    openingHours: string[];
    images: {
      url: string;
      alt: string;
    }[];
    menu: {
      id: string;
      name: string;
      description: string;
      price: number;
    }[];
    similarRestaurants: {
      id: string;
      name: string;
      rating: number;
      reviewCount: number;
      priceRange: string;
      cuisine: string;
      address: string;
      city: string;
      mainImage: {
        url: string;
        alt: string;
      };
    }[];
  };
}

const RestaurantPage: NextPage = () => {
  const router = useRouter();
  const { restaurantID } = router.query;

  const { loading, error, data } = useQuery<RestaurantData>(GET_RESTAURANT, {
    variables: { id: restaurantID },
    skip: !restaurantID,
  });

  const handleBack = () => {
    router.back();
  };

  if (loading || !data) {
    return (
      <>
        <SEO
          title="Loading Restaurant..."
          description="Loading restaurant details"
        />
        <Container>
          <BackButton onClick={handleBack}>
            <ArrowLeft size={20} />
            <span>Back</span>
          </BackButton>
          <RestaurantSkeleton />
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SEO title="Error" description="Error loading restaurant" />
        <Container>
          <BackButton onClick={handleBack}>
            <ArrowLeft size={20} />
            <span>Back</span>
          </BackButton>
          <ErrorContainer>
            <Heading level={1}>Error loading restaurant</Heading>
            <Text>
              Sorry, we couldn't load the restaurant details. Please try again
              later.
            </Text>
            <Button onClick={() => router.reload()}>Retry</Button>
          </ErrorContainer>
        </Container>
      </>
    );
  }

  const { restaurant } = data;

  return (
    <>
      <SEO
        title={`${restaurant.name} | TheFork`}
        description={restaurant.description.substring(0, 160)}
      />
      <Container>
        <BackButton onClick={handleBack}>
          <ArrowLeft size={20} />
          <span>Back</span>
        </BackButton>

        <RestaurantHeader>
          <ImageGallery>
            {restaurant.images.length > 0 ? (
              <MainImage
                src={restaurant.images[0].url}
                alt={restaurant.images[0].alt || restaurant.name}
              />
            ) : (
              <PlaceholderImage>No image available</PlaceholderImage>
            )}
            <ThumbnailContainer>
              {restaurant.images.slice(1, 5).map((image, index) => (
                <Thumbnail
                  key={index}
                  src={image.url}
                  alt={image.alt || `${restaurant.name} - image ${index + 2}`}
                />
              ))}
            </ThumbnailContainer>
          </ImageGallery>

          <RestaurantInfo>
            <Heading level={1}>{restaurant.name}</Heading>

            <InfoRow>
              <RatingContainer>
                <Star size={20} color="gold" />
                <Text>{restaurant.rating.toFixed(1)}</Text>
                <Text color="textSecondary">
                  ({restaurant.reviewCount} reviews)
                </Text>
              </RatingContainer>
              <PriceRange>{restaurant.priceRange}</PriceRange>
              <Cuisine>{restaurant.cuisine}</Cuisine>
            </InfoRow>

            <InfoRow>
              <InfoItem>
                <Location size={16} />
                <Text>
                  {restaurant.address}, {restaurant.city}
                </Text>
              </InfoItem>
            </InfoRow>

            <InfoRow>
              <InfoItem>
                <Phone size={16} />
                <Text>{restaurant.phone}</Text>
              </InfoItem>
            </InfoRow>

            {restaurant.website && (
              <InfoRow>
                <InfoItem>
                  <Globe size={16} />
                  <Link
                    href={restaurant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {restaurant.website.replace(/^https?:\/\//, '')}
                  </Link>
                </InfoItem>
              </InfoRow>
            )}

            <InfoRow>
              <InfoItem>
                <Time size={16} />
                <VStack spacing="xs" align="flex-start">
                  {restaurant.openingHours.map((hours, index) => (
                    <Text key={index}>{hours}</Text>
                  ))}
                </VStack>
              </InfoItem>
            </InfoRow>

            <ButtonsContainer>
              <Button>Book a Table</Button>
              <Button variant="secondary">View Menu</Button>
            </ButtonsContainer>
          </RestaurantInfo>
        </RestaurantHeader>

        <Section>
          <Heading level={2}>About</Heading>
          <CollapsibleText maxLines={4}>
            {restaurant.description}
          </CollapsibleText>
        </Section>

        {restaurant.menu.length > 0 && (
          <Section>
            <Heading level={2}>Menu Highlights</Heading>
            <MenuGrid>
              {restaurant.menu.map((item) => (
                <MenuItem key={item.id}>
                  <MenuItemName>{item.name}</MenuItemName>
                  <MenuItemDescription>{item.description}</MenuItemDescription>
                  <MenuItemPrice>${item.price.toFixed(2)}</MenuItemPrice>
                </MenuItem>
              ))}
            </MenuGrid>
          </Section>
        )}

        {restaurant.similarRestaurants.length > 0 && (
          <Section>
            <Heading level={2}>Similar Restaurants</Heading>
            <RestaurantsList
              restaurants={restaurant.similarRestaurants.map((r) => ({
                id: r.id,
                name: r.name,
                rating: r.rating,
                reviewCount: r.reviewCount,
                priceRange: r.priceRange,
                cuisine: r.cuisine,
                address: r.address,
                city: r.city,
                image: r.mainImage,
              }))}
            />
          </Section>
        )}
      </Container>
    </>
  );
};

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: 16px;
  color: inherit;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const RestaurantHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MainImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  color: #666;
`;

const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PriceRange = styled.span`
  padding: 4px 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 14px;
`;

const Cuisine = styled.span`
  padding: 4px 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 14px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const Section = styled.section`
  margin-bottom: 32px;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  margin-top: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MenuItem = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuItemName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const MenuItemDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const MenuItemPrice = styled.span`
  font-weight: 600;
`;

const RestaurantSkeleton = () => (
  <>
    <VStack spacing="lg">
      <RestaurantHeader>
        <Skeleton height="300px" width="100%" borderRadius="8px" />
        <VStack spacing="md">
          <Skeleton height="32px" width="80%" />
          <Skeleton height="20px" width="60%" />
          <Skeleton height="20px" width="90%" />
          <Skeleton height="20px" width="70%" />
          <Skeleton height="20px" width="50%" />
          <HStack spacing="md">
            <Skeleton height="40px" width="120px" />
            <Skeleton height="40px" width="120px" />
          </HStack>
        </VStack>
      </RestaurantHeader>

      <Section>
        <Skeleton height="28px" width="120px" marginBottom="16px" />
        <VStack spacing="sm">
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="90%" />
          <Skeleton height="16px" width="95%" />
        </VStack>
      </Section>

      <Section>
        <Skeleton height="28px" width="180px" marginBottom="16px" />
        <MenuGrid>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} height="120px" width="100%" />
          ))}
        </MenuGrid>
      </Section>
    </VStack>
  </>
);

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 0;
  text-align: center;
`;

export default RestaurantPage;
