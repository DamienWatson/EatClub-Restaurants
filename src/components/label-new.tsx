import React from 'react'
import StarIcon from './icons/star-icon';
import classes from './label-new.module.scss';

const LabelNew = () => (
  <div className={classes.newLabel}>
    <StarIcon
      size="12"
      colour="#fc0"
    />
    New
  </div>
);

export default LabelNew;
