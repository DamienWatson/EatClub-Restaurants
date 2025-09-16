import React from 'react';
import { RestaurantType } from '../types/restaurants';
import { kebabCase } from '../scripts/helpers';
import { Link } from 'react-router-dom';
import HeartIcon from './icons/heart-icon';
import { availableMessage, getTags } from '../scripts/deals';
import IconButton from './icon-button';
import classes from './restaurant-card.module.scss';

type RestaurantCardProps = {
  restaurant: RestaurantType,
};

const RestaurantCard = ({ restaurant }:RestaurantCardProps) => {
  const { close, discount, end, open, start } = restaurant.deals[0];

  const getTagLine = getTags(restaurant.deals);

  const hours = { open: restaurant.open, close: restaurant.close };
  const openTime = open || start;
  const closeTime = close || end;

  return (
    <div className={classes.container}>
      <Link to={`/${kebabCase(restaurant.name)}`}
        className={classes.cover}
        style={{ backgroundImage: `url(${restaurant.imageLink})` }}
      >
        <div className={classes.deal}>
          <strong>{discount}% off</strong>
          <p>{availableMessage(hours, openTime, closeTime)}</p>
        </div>
      </Link>

      <div className={classes.heading}>
        <Link to={`/${kebabCase(restaurant.name)}`}>
          <h2>{restaurant.name}</h2>
        </Link>
        <IconButton rounded>
          <HeartIcon />
        </IconButton>
      </div>

      <p>0.5km Away, {restaurant.suburb}</p>
      <p className={classes.cuisines}>{restaurant.cuisines.join(', ')}</p>
      <p>{getTagLine.join(' • ')}</p>
    </div>
  );
};

export default RestaurantCard;
