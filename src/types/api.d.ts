export type City = {
  id: string;
  name: string;
  photo: string;
};

export type RestaurantAddress = {
  street: string;
  zipCode: string;
  locality: string;
  country: string;
};

export type RestaurantAggregateRatings = {
  ratingValue: number;
  reviewCount: number;
};

export type RestaurantAveragePrice = {
  value: number;
  currency: string;
};

export type Restaurant = {
  id: string;
  slug: string;
  name: string;
  photo: string;
  address: RestaurantAddress;
  averagePrice: RestaurantAveragePrice;
  aggregateRatings?: RestaurantAggregateRatings;
  bestOffer: string | null;
};

export type TopRestaurantResult = {
  city: City;
  restaurants: Restaurant[];
};
