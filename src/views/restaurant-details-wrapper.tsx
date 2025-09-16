import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFirstLoad, setIsLoading, setRestaurants } from '../slices/ecrSlice';
import { dataFetch } from '../scripts/data-fetching';
import RestaurantDetails from './restaurant-details';
import classes from './restaurant-details.module.scss';

const RestaurantDetailsWrapper = () => {
  const dispatch = useDispatch();
  const firstLoad = useSelector((state:RootState) => state.firstLoad);
  const isLoading = useSelector((state:RootState) => state.isLoading);

  useEffect(() => {
    if (firstLoad) {
      dataFetch()
        .then((restaurants) => {
          dispatch(setRestaurants({ restaurants }));
          dispatch(setIsLoading(false));
          dispatch(setFirstLoad(false));
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading || firstLoad) {
    return <p className={classes.message}>Loading...</p>;
  }

  return (
    <RestaurantDetails />
  );
};

export default RestaurantDetailsWrapper;
