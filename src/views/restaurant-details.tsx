import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Layout from '../components/layout';
import DetailsMenu from '../components/details-menu';
import DetailsContent from '../components/details-content';
import classes from './restaurant-details.module.scss';

const RestaurantDetails = () => {
  const restaurants = useSelector((state:RootState) => state.restaurants);

  return (
    <Layout>
      <div
        className={classes.carousel}
        style={{ backgroundImage: `url(${restaurants[1].imageLink})` }}
      ></div>

      <DetailsMenu />

      <DetailsContent restaurant={restaurants[1]} />
    </Layout>
  );
};

export default RestaurantDetails;
