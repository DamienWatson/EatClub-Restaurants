import React, { useState } from 'react';
import Layout from '../components/layout';
import InputFilter from '../components/input-filter';
import { RestaurantsType, RestaurantType } from '../types/restaurants';
import RestaurantCard from '../components/restaurant-card';
import classes from './restaurants.module.scss';

type RestaurantsProps = {
  restaurants: RestaurantsType,
};

const Restaurants = ({ restaurants }: RestaurantsProps) => {
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState(restaurants);

  const handleInputUpdate = (value: string) => {
    setFilter(value);
  };

  return (
    <Layout>
      <InputFilter onChange={handleInputUpdate} />

      <h1 className={classes.srOnly}>EatClub Restaurants</h1>

      {restaurants.map((restaurant: RestaurantType) => (
        <RestaurantCard
          key={restaurant.objectId}
          restaurant={restaurant}
        />
      ))}

    </Layout>
  );
};

export default Restaurants;
