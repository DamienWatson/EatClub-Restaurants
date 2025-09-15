import React from 'react';
import { DealType, Hours } from '../types/restaurants';
import DealContent from './deal-content';
import classes from './deal-list.module.scss';

type DealListProps = {
  deals: Array<DealType>,
  hours: Hours,
}

const DealList = ({ deals, hours }: DealListProps) => {
  const sortedDeals = [...deals].sort((a, b) => Number(b.discount) - Number(a.discount));

  return (
    <ul className={classes.container}>
      {sortedDeals.map((deal) => (
        <DealContent
          key={deal.objectId}
          deal={deal}
          hours={hours}
        />
      ))}
    </ul>
  );
};

export default DealList;
