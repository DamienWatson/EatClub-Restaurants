import axios from "axios";
import { RestaurantsType, RestaurantType } from "../types/restaurants";

export const fetchRestaurants = () => new Promise<RestaurantsType>((resolve) => {
  axios.get('/misc/challengedata.json')
    .then(({ data }) => {
      // Sort Deals by Discount and Restaurant by First (Best) Deal
      const restaurants = [...data.restaurants]
        .map((restaurant: RestaurantType) => ({
          ...restaurant,
          deals: [...restaurant.deals].sort((a, b) => Number(b.discount) - Number(a.discount)),
        }))
        .sort((a, b) => Number(b.deals[0].discount) - Number(a.deals[0].discount));
      resolve(restaurants);
    });
});
