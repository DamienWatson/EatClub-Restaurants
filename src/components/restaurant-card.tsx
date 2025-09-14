import React from 'react';
import { RestaurantType } from '../types/restaurants';
import Icon from './icon';
import { kebabCase } from '../scripts/helpers';
import { Link } from 'react-router-dom';
import HeartIcon from './icons/heart-icon';
import classes from './restaurant-card.module.scss';

type RestaurantCardProps = {
  restaurant: RestaurantType,
};

const RestaurantCard = ({ restaurant }:RestaurantCardProps) => {
  const getTags = ["Dine In", "Takeaway"];

  return (
    <div className={classes.container}>
      <Link to={`/${kebabCase(restaurant.name)}`}
        className={classes.cover}
        style={{ backgroundImage: `url(${restaurant.imageLink})` }}
      >
        <div className={classes.deal}>
          <strong>Deal% off</strong>
          <p>Byline message</p>
        </div>
      </Link>

      <div className={classes.heading}>
        <Link to={`/${kebabCase(restaurant.name)}`}>
          <h2>{restaurant.name}</h2>
        </Link>
        <Icon>
          <HeartIcon />
        </Icon>
      </div>

      <p>0.5km Away, {restaurant.suburb}</p>
      <p className={classes.cuisines}>{restaurant.cuisines.join(', ')}</p>
      <p>{getTags.join(' • ')}</p>
    </div>
  );
};

export default RestaurantCard;
