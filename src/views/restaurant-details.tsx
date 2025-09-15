import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';
import DetailsMenu from '../components/details-menu';
import DetailsContent from '../components/details-content';
import { kebabCase } from '../scripts/helpers';
import classes from './restaurant-details.module.scss';
import LabelNew from '../components/label-new';

const RestaurantDetails = () => {
  const params = useParams();
  const restaurants = useSelector((state:RootState) => state.restaurants);
  const id = params.id;

  const currentRestaurant = restaurants.find((restaurant) => kebabCase(restaurant.name) === id);

  // Couldn't find anything to link this to, so it appears 50% of the time.
  const randomNewLabel = Math.random() >= 0.5;

  if (!currentRestaurant) {
    return (
      <Layout>
        <p className={classes.message}>Restaurant not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className={classes.carousel}
        style={{ backgroundImage: `url(${currentRestaurant.imageLink})` }}
      >
        {randomNewLabel && <LabelNew />}
      </div>

      <DetailsMenu />

      <DetailsContent restaurant={currentRestaurant} />
    </Layout>
  );
};

export default RestaurantDetails;
