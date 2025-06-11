import React from 'react';
import Button from '@/design-system/Button/Button';
import RestaurantCard from '@/design-system/RestaurantCard/RestaurantCard';
import Text from '@/design-system/Text/Text';
import Heading from '@/design-system/Heading/Heading';
import { Rating, MapPin, Price } from '@/design-system/icons';
import { Restaurant } from '@/types/api';
import * as S from './RestaurantPageInfo.styles';

type RestaurantPageInfoProps = {
  restaurant: Restaurant;
  otherRestaurants?: Restaurant[];
  cityName?: string;
};

/**
 * RestaurantPageInfo component displays comprehensive restaurant information
 * including images, details, pricing, and related restaurants.
 */
const RestaurantPageInfo: React.FC<RestaurantPageInfoProps> = ({
  restaurant,
  otherRestaurants = [],
  cityName = '',
}) => {
  const handleBookNow = () => {
    // TODO: Implement booking functionality
    console.log('Book now clicked for restaurant:', restaurant.id);
  };

  const handleSeeMore = () => {
    // TODO: Implement see more functionality
    console.log('See more restaurants in:', cityName);
  };

  return (
    <S.RestaurantPageContainer>
      <S.Container>
        <Button
          hierarchy="tertiary"
          size="m"
          intent="default"
          onClick={handleBookNow}
        >
          Book now
        </Button>

        <S.RestaurantSection>
          <S.MainImage
            src={restaurant.photo || '/placeholder-image.jpg'}
            alt={`${restaurant.name} main image`}
          />
          <S.ImageGrid>
            <S.ImageRow>
              <S.GridImage
                src={restaurant.photo || '/placeholder-image.jpg'}
                alt={`${restaurant.name} gallery image 1`}
              />
              <S.GridImage
                src={restaurant.photo || '/placeholder-image.jpg'}
                alt={`${restaurant.name} gallery image 2`}
              />
            </S.ImageRow>
            <S.ImageRow>
              <S.GridImage
                src={restaurant.photo || '/placeholder-image.jpg'}
                alt={`${restaurant.name} gallery image 3`}
              />
              <S.GridImage
                src={restaurant.photo || '/placeholder-image.jpg'}
                alt={`${restaurant.name} gallery image 4`}
              />
            </S.ImageRow>
          </S.ImageGrid>
        </S.RestaurantSection>

        <S.RestaurantInfo>
          <S.RestaurantHeader>
            <Heading variant="h2" as="h1">
              {restaurant.name}
            </Heading>
            {restaurant.aggregateRatings?.ratingValue && (
              <S.RatingContainer>
                <Rating variant="filled" size="s" />
                <Text variant="t1" weight="bold">
                  {restaurant.aggregateRatings.ratingValue}
                </Text>
              </S.RatingContainer>
            )}
          </S.RestaurantHeader>

          <S.RestaurantDetails>
            <S.AddressContainer>
              <MapPin size="s" />
              <S.AddressInfo>
                <Text variant="t2">{restaurant.address.street}</Text>
                <Text variant="t2">,</Text>
                <Text variant="t2">{restaurant.address.zipCode}</Text>
                <Text variant="t2">,</Text>
                <Text variant="t2">{restaurant.address.locality}</Text>
                <Text variant="t2">,</Text>
                <Text variant="t2">{restaurant.address.country}</Text>
              </S.AddressInfo>
            </S.AddressContainer>

            {restaurant.averagePrice && (
              <S.PriceContainer>
                <Price size="s" />
                <S.PriceInfo>
                  <Text variant="t2">≈</Text>
                  <Text variant="t2">{restaurant.averagePrice.value}</Text>
                  <Text variant="t2">{restaurant.averagePrice.currency}</Text>
                </S.PriceInfo>
              </S.PriceContainer>
            )}
          </S.RestaurantDetails>
        </S.RestaurantInfo>

        {otherRestaurants && otherRestaurants.length > 0 && (
          <S.Section>
            <S.SectionHeader>
              <Text variant="t1" weight="bold">
                More restaurants in {cityName || restaurant.address.locality}
              </Text>
              <Button
                hierarchy="ghost-compact"
                size="m"
                intent="default"
                onClick={handleSeeMore}
              >
                See more
              </Button>
            </S.SectionHeader>
            <S.ItemList>
              {otherRestaurants
                .filter(
                  (otherRestaurant) => otherRestaurant.id !== restaurant.id
                )
                .slice(0, 3)
                .map((otherRestaurant) => (
                  <S.RestaurantCardWrapper key={otherRestaurant.id}>
                    <RestaurantCard restaurant={otherRestaurant} />
                  </S.RestaurantCardWrapper>
                ))}
            </S.ItemList>
          </S.Section>
        )}
      </S.Container>

      <S.ButtonDock>
        <Button
          hierarchy="primary"
          size="l"
          intent="default"
          fillContainer={true}
          onClick={handleBookNow}
        >
          Book now
        </Button>
      </S.ButtonDock>
    </S.RestaurantPageContainer>
  );
};

export default RestaurantPageInfo;
