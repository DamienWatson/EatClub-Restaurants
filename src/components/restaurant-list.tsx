import React from 'react';
import { RestaurantsType, RestaurantType } from '../types/restaurants';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import RestaurantCard from './restaurant-card';
import classes from './restaurant-list.module.scss';

type RestaurantListProps = {
  restaurants: RestaurantsType,
};

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  const filterText = useSelector((state:RootState) => state.filterText);

  if (restaurants.length === 0) {
    return (
      <p className={classes.message}>
        {(filterText !== '')
          ? 'No restaurants match your filter text.'
          : 'No restaurants found.'
        }
      </p>
    );
  }

  return (
    <>
      {restaurants.map((restaurant: RestaurantType) => (
        <RestaurantCard
          key={restaurant.objectId}
          restaurant={restaurant}
        />
      ))}
    </>
  );
};

export default RestaurantList;
