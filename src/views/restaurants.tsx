import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import InputFilter from '../components/input-filter';
import { RestaurantsType } from '../types/restaurants';
import classes from './restaurants.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFilterText } from '../slices/ecrSlice';
import { charsInArr, charsInStr } from '../scripts/helpers';
import RestaurantList from '../components/restaurant-list';

const Restaurants = () => {
  const dispatch = useDispatch();
  const filterText = useSelector((state:RootState) => state.filterText);
  const isLoading = useSelector((state:RootState) => state.isLoading);
  const restaurants = useSelector((state:RootState) => state.restaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantsType>(restaurants);

  const handleInputUpdate = (value: string) => {
    dispatch(setFilterText(value));
  };

  useEffect(() => {
    let filtered: RestaurantsType = restaurants;

    if (filterText !== '') {
      filtered = restaurants.filter((restaurant) => (
        (charsInStr(restaurant.name, filterText) || charsInArr(restaurant.cuisines, filterText))
      ));
    }

    setFilteredRestaurants(filtered);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

  return (
    <Layout>
      <InputFilter onChange={handleInputUpdate} />

      <h1 className={classes.srOnly}>EatClub Restaurants</h1>

      {(!isLoading && restaurants.length === 0) && (
        <p>No Restaurants found</p>
      )}

      {(!isLoading && restaurants.length > 0) && (
        <RestaurantList restaurants={filteredRestaurants} />
      )}
    </Layout>
  );
};

export default Restaurants;
