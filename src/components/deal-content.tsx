import React from 'react';
import { DealType, Hours } from '../types/restaurants';
import classes from './deal-content.module.scss';
import LightningIcon from './icons/lightning-icon';
import Button from './button';
import { checkTimeBeforeTime } from '../scripts/helpers';

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
    let invalidTime = false;

    if (openTime !== undefined) {
      if (!checkTimeBeforeTime(openTime, hours.open)) {
        invalidTime = true;
      }
    }

    switch(true) {
      case invalidTime:
        return 'Enquire within'
      case (!openTime && closeTime !== undefined):
        return `Between ${hours.open} - ${closeTime}`;
      case (openTime !== undefined && !closeTime):
        return `Between $openTIme} - ${hours.close}`;
      case (openTime !== undefined && closeTime !== undefined):
        return `Between ${openTime} - ${closeTime}`;
      default:
        return 'Anytime today';
    };
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
