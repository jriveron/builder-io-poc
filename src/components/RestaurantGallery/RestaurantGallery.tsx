import React from 'react';
import * as S from './RestaurantGallery.styles';

interface RestaurantGalleryProps {
  /**
   * Array of image URLs for the restaurant gallery
   */
  images: string[];
  /**
   * Alt text for the main image
   */
  alt?: string;
}

/**
 * RestaurantGallery displays a grid of restaurant images with the main image taking up more space
 */
const RestaurantGallery: React.FC<RestaurantGalleryProps> = ({
  images,
  alt = 'Restaurant image',
}) => {
  // Ensure we have at least 5 images for the layout, use fallback if needed
  const fallbackImage =
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop';
  const galleryImages = [...images];
  while (galleryImages.length < 5) {
    galleryImages.push(fallbackImage);
  }

  return (
    <S.GalleryContainer>
      <S.MainImage
        src={galleryImages[0] || fallbackImage}
        alt={alt}
        loading="lazy"
      />
      <S.SmallImage
        src={galleryImages[1] || fallbackImage}
        alt=""
        loading="lazy"
      />
      <S.SmallImage
        src={galleryImages[2] || fallbackImage}
        alt=""
        loading="lazy"
      />
      <S.SmallImage
        src={galleryImages[3] || fallbackImage}
        alt=""
        loading="lazy"
      />
      <S.SmallImage
        src={galleryImages[4] || fallbackImage}
        alt=""
        loading="lazy"
      />
    </S.GalleryContainer>
  );
};

export default RestaurantGallery;
