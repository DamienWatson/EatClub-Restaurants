import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { setIsLoading, setRestaurants } from '../slices/ecrSlice';
import { DealType, RestaurantType } from '../types/restaurants';
import Restaurants from './restaurants';
import classes from './restaurants.module.scss';

const RestaurantsWrapper = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state:RootState) => state.isLoading);

  const fetchData = () => {
    axios.get('/misc/challengedata.json')
      .then(({ data }) => {
        // Sort Deals by Discount and Restaurant by First (Best) Deal
        const restaurants = [...data.restaurants]
          .map((restaurant: RestaurantType) => ({
            ...restaurant,
            deals: [...restaurant.deals].sort((a, b) => Number(b.discount) - Number(a.discount)),
          }))
          .sort((a, b) => Number(b.deals[0].discount) - Number(a.deals[0].discount));

        dispatch(setRestaurants({ restaurants }));
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        } else {
          console.log('Error:', error.message);
        }
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      })
    };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p className={classes.message}>Loading...</p>;
  }

  return <Restaurants />;  
};

export default RestaurantsWrapper;