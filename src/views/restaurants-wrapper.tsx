import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Restaurants from './restaurants';
import classes from './restaurants.module.scss';
import { RestaurantType } from '../types/restaurants';

const RestaurantsWrapper = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchData = () => {
    axios.get('/misc/challengedata.json')
      .then(({ data }) => {
        setRestaurants(data.restaurants);
      })
      .catch(error => {
        if (error.response) {
          // The request was made, but the server responded with an error
          console.log(error.response.data);
          console.log(error.response.status);
        } else {
          // Network error or a CORS issue
          console.log('Error:', error.message);
        }
      });
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className={classes.h1}>RestaurantsWrapper</h1>

      <Restaurants />

      {restaurants.map((restaurant: RestaurantType) => (
        <p key={restaurant.objectId}>
          {restaurant.name}
        </p>
      ))}
    </div>
  );
};

export default RestaurantsWrapper;