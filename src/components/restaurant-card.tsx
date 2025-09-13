import React from 'react';
import { RestaurantType } from '../types/restaurants';
import classes from './restaurant-card.module.scss';
import Icon from './icon';

type RestaurantCardProps = {
  restaurant: RestaurantType,
};

const RestaurantCard = ({ restaurant }:RestaurantCardProps) => {
  const getTags = ["Dine In", "Takeaway"];

  return (
    <div className={classes.container}>
      <div
        className={classes.cover}
        style={{ backgroundImage: `url(${restaurant.imageLink})` }}
      >
        <div className={classes.deal}>
          <strong>Deal% off</strong>
          <p>Byline message</p>
        </div>
      </div>

      <div className={classes.heading}>
        <h2>{restaurant.name}</h2>
        <Icon>H</Icon>
      </div>

      <p>0.5km Away, {restaurant.suburb}</p>
      <p className={classes.cuisines}>{restaurant.cuisines.join(', ')}</p>
      <p>{getTags.join(' • ')}</p>
    </div>
  );
};

export default RestaurantCard;
