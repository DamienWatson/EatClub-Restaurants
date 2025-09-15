import React from 'react';
import { DealType, Hours } from '../types/restaurants';
import DealContent from './deal-content';
import classes from './deal-list.module.scss';

type DealListProps = {
  deals: Array<DealType>,
  hours: Hours,
}

const DealList = ({ deals, hours }: DealListProps) => (
  <ul className={classes.container}>
    {deals.map((deal) => (
      <DealContent
        key={deal.objectId}
        deal={deal}
        hours={hours}
      />
    ))}
  </ul>
);

export default DealList;
