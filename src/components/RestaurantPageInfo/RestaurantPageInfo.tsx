'use client';
import * as React from 'react';
import Button from '@/design-system/Button/Button';
import {
  RestaurantPageContainer,
  MainContainer,
  RestaurantSection,
  LargeImage,
  SmallImagesContainer,
  SmallImagesRow,
  SmallImage,
  RestaurantInfo,
  RestaurantHeader,
  RestaurantName,
  RatingContainer,
  RatingIcon,
  RatingValue,
  RestaurantDetails,
  DetailContainer,
  DetailIcon,
  DetailInfo,
  DetailText,
  PriceSymbol,
  PriceCurrency,
  ButtonDock,
} from './RestaurantPageInfo.styles';

interface RestaurantPageInfoProps {
  restaurantName?: string;
  rating?: number;
  address?: string;
  zipcode?: string;
  locality?: string;
  country?: string;
  averagePriceValue?: string;
  averagePriceCurrency?: string;
  images?: {
    main?: string;
    gallery?: string[];
  };
  onBookNow?: () => void;
}

function RestaurantPageInfo({
  restaurantName = 'Culinary Haven',
  rating = 8.5,
  address = '{Address}',
  zipcode = '{Zipcode}',
  locality = '{Locality}',
  country = '{Country}',
  averagePriceValue = 'averagePrice[Value]',
  averagePriceCurrency = 'averagePrice[Currency]',
  images = {
    main: 'https://cdn.builder.io/api/v1/image/assets/51ba4527214d4977b6abf72cc01c1b9f/22c9d6561cbac6f341a87f84217e659ca7553ead?placeholderIfAbsent=true',
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets/51ba4527214d4977b6abf72cc01c1b9f/241e4f8072d52324172f36f7151f75d26411aa01?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/51ba4527214d4977b6abf72cc01c1b9f/6e8d7fd859a401a15354f57d21bf053c62e107f4?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/51ba4527214d4977b6abf72cc01c1b9f/8455a8b1163c44294af9417f077b71a04f7110d1?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/51ba4527214d4977b6abf72cc01c1b9f/1f743e88eb93a7b62ac6f0bf409fb3a159ed0fa6?placeholderIfAbsent=true',
    ],
  },
  onBookNow,
}: RestaurantPageInfoProps) {
  return (
    <RestaurantPageContainer>
      <MainContainer>
        <Button
          hierarchy="tertiary"
          size="m"
          intent="default"
          onClick={onBookNow || (() => {})}
        >
          Book now
        </Button>

        <RestaurantSection>
          <LargeImage src={images.main} alt="Restaurant main image" />
          <SmallImagesContainer>
            <SmallImagesRow>
              <SmallImage
                src={images.gallery?.[0]}
                alt="Restaurant gallery image"
              />
              <SmallImage
                src={images.gallery?.[1]}
                alt="Restaurant gallery image"
              />
            </SmallImagesRow>
            <SmallImagesRow>
              <SmallImage
                src={images.gallery?.[2]}
                alt="Restaurant gallery image"
              />
              <SmallImage
                src={images.gallery?.[3]}
                alt="Restaurant gallery image"
              />
            </SmallImagesRow>
          </SmallImagesContainer>
        </RestaurantSection>

        <RestaurantInfo>
          <RestaurantHeader>
            <RestaurantName>{restaurantName}</RestaurantName>
            <RatingContainer>
              <RatingIcon
                src="https://cdn.builder.io/api/v1/image/assets/51ba4527214d4977b6abf72cc01c1b9f/2884ad6116931ce713bfe327fc29b2ba66cf7fc0?placeholderIfAbsent=true"
                alt="Rating star"
              />
              <RatingValue>{rating}</RatingValue>
            </RatingContainer>
          </RestaurantHeader>

          <RestaurantDetails>
            <DetailContainer>
              <DetailIcon
                src="https://cdn.builder.io/api/v1/image/assets/51ba4527214d4977b6abf72cc01c1b9f/e765f2d573e244bce129f65010f5f2f51fc273f5?placeholderIfAbsent=true"
                alt="Location icon"
              />
              <DetailInfo>
                <DetailText>{address}</DetailText>
                <DetailText>,</DetailText>
                <DetailText>{zipcode}</DetailText>
                <DetailText>,</DetailText>
                <DetailText>{locality}</DetailText>
                <DetailText>,</DetailText>
                <DetailText>{country}</DetailText>
              </DetailInfo>
            </DetailContainer>

            <DetailContainer>
              <DetailIcon
                src="https://cdn.builder.io/api/v1/image/assets/51ba4527214d4977b6abf72cc01c1b9f/d2c97c451d70687cc5f5fd73665ef12066f26007?placeholderIfAbsent=true"
                alt="Price icon"
              />
              <DetailInfo>
                <PriceSymbol>≈</PriceSymbol>
                <DetailText>{averagePriceValue}</DetailText>
                <PriceCurrency>{averagePriceCurrency}</PriceCurrency>
              </DetailInfo>
            </DetailContainer>
          </RestaurantDetails>
        </RestaurantInfo>
      </MainContainer>

      <ButtonDock>
        <Button
          hierarchy="primary"
          size="l"
          intent="default"
          onClick={onBookNow || (() => {})}
        >
          Book now
        </Button>
      </ButtonDock>
    </RestaurantPageContainer>
  );
}

export default RestaurantPageInfo;
