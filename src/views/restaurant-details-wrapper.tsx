import React from 'react';
import { useDispatch } from 'react-redux';
import { setFirstLoad, setIsLoading, setRestaurants } from '../slices/ecrSlice';
import { fetchRestaurants } from '../scripts/data-fetching';
import Loader from '../components/loader';
import RestaurantDetails from './restaurant-details';

const RestaurantDetailsWrapper = () => {
  const dispatch = useDispatch();

  const dataFetching = () => {
    // Will change to `fetchRestaurantById`
    fetchRestaurants()
      .then((restaurants) => {
        dispatch(setRestaurants({ restaurants }));
        dispatch(setIsLoading(false));
        dispatch(setFirstLoad(false));
      });
  }

  return (
    <Loader
      load={dataFetching}
      Component={(<RestaurantDetails />)}
    />
  )
};


export default RestaurantDetailsWrapper;
