import React, { useEffect } from 'react';
import axios from 'axios';
import Restaurants from './restaurants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { setIsLoading, setRestaurants } from '../slices/ecrSlice';
import classes from './restaurants.module.scss';

const RestaurantsWrapper = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state:RootState) => state.isLoading);

  const fetchData = () => {
    axios.get('/misc/challengedata.json')
      .then(({ data }) => {
        dispatch(setRestaurants(data));
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