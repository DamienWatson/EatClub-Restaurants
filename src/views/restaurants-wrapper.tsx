import React from 'react';
import { useDispatch } from 'react-redux';
import { setFirstLoad, setIsLoading, setRestaurants } from '../slices/ecrSlice';
import { fetchRestaurants } from '../scripts/data-fetching';
import Loader from '../components/loader';
import Restaurants from './restaurants';

const RestaurantsWrapper = () => {
  const dispatch = useDispatch();

  const dataFetching = () => {
    // Fetch all Restaurants
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
      Component={(<Restaurants />)}
    />
  )
};

export default RestaurantsWrapper;