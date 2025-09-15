import React from 'react';
import { RestaurantType } from '../types/restaurants';
import ClockIcon from './icons/clock-icon';
import LocationIcon from './icons/location-icon';
import DealList from './deal-list';
import classes from './details-content.module.scss';

type DetailsContentProps = {
  restaurant: RestaurantType,
}

const DetailsContent = ({ restaurant }: DetailsContentProps) => {
  const { address1, close, deals, name, open, suburb } = restaurant;
  const hours = { open, close };

  const tagList = deals.reduce((tags: Array<string>, deal) => {
    const newTag: string = deal.dineIn === 'true' ? 'Dine In' : 'Takeaway';

    if (tags.includes(newTag)) {
      return tags;
    }

    return [
      ...tags,
      newTag,
    ];
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.screenContent}>
        <h1 className={classes.heading}>{name}</h1>
        <p className={classes.tagline}>{tagList.join(' • ')}</p>

        <div className={classes.infoList}>
          <ClockIcon size="32" />
          <p>Hours: {open} - {close}</p>
          <LocationIcon size="32" />
          <p>{address1}, {suburb}</p>
        </div>

        <DealList deals={deals} hours={hours} />
      </div>
    </div>
  );
};

export default DetailsContent;
