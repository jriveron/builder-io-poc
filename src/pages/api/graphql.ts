import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

import DATA from '@/pages/api/data.json';

const resolvers = {
  Query: {
    getCities: async () => {
      return DATA.cities;
    },
    getRestaurant: async (_: unknown, args: { restaurantID: string }) => {
      let restaurantResult = undefined;
      DATA.restaurantsByCities.forEach((restaurantsByCity) => {
        restaurantsByCity.restaurants.forEach((restaurant) => {
          if (args.restaurantID === restaurant.id) {
            restaurantResult = restaurant;
          }
        });
      });

      if (!restaurantResult) return null;

      return restaurantResult;
    },
    getRestaurants: async (_: unknown, args: { cityID: string }) => {
      const cityRestaurants = DATA.restaurantsByCities.find((results) => {
        return results.cityId === Number(args.cityID);
      });

      if (!cityRestaurants) return [];

      return cityRestaurants.restaurants ? cityRestaurants.restaurants : [];
    },
    getTopRestaurants: async () => {
      const topRestaurants = DATA.restaurantsByCities.map((results) => {
        const city = DATA.cities.find((city) => {
          return results.cityId === city.id;
        });

        return {
          city,
          restaurants: results.restaurants.slice(0, 3),
        };
      });

      if (!topRestaurants) return [];

      return topRestaurants;
    },
  },
};

const typeDefs = gql`
  type City {
    id: ID!
    name: String!
    photo: String!
  }

  type RestaurantAddress {
    street: String!
    zipCode: String!
    locality: String!
    country: String!
  }

  type RestaurantAggregateRatings {
    ratingValue: Float!
    reviewCount: Int!
  }

  type RestaurantAveragePrice {
    value: Int!
    currency: String!
  }

  type Restaurant {
    id: ID!
    slug: String!
    name: String!
    photo: String!
    address: RestaurantAddress!
    averagePrice: RestaurantAveragePrice!
    aggregateRatings: RestaurantAggregateRatings
    bestOffer: String
  }

  type TopRestaurantResult {
    city: City!
    restaurants: [Restaurant!]!
  }

  type Query {
    getRestaurant(restaurantID: ID!): Restaurant!
    getRestaurants(cityID: ID!): [Restaurant!]!
    getTopRestaurants: [TopRestaurantResult!]!
    getCities: [City!]!
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);
