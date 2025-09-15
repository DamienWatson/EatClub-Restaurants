import React from 'react';
import { DealType, Hours } from '../types/restaurants';
import LightningIcon from './icons/lightning-icon';
import Button from './button';
import { availableMessage } from '../scripts/deals';
import classes from './deal-content.module.scss';

type DealContentProps = {
  deal: DealType,
  hours: Hours,
}

const DealContent = ({
  deal: { close, discount, end, lightning, objectId, open, qtyLeft, start },
  hours,
}: DealContentProps) => {
  const available = () => {
    const openTime = open || start;
    const closeTime = close || end;

    return availableMessage(hours, openTime, closeTime);
  };
  
  return (
    <li className={classes.container}>
      <div>
        <h2 className={classes.heading}>
          {lightning && <LightningIcon colour="#fc0" />}
          {discount}% Off
        </h2>
        <p className={classes.available}>{available()}</p>
        <p className={classes.dealsLeft}>{qtyLeft}Deals left</p>
      </div>

      <Button>Redeem</Button>
    </li>
  );
};

export default DealContent;
