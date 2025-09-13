import React, { ReactNode } from 'react';
import classes from './icon.module.scss';

type IconProps = {
  children: ReactNode,
};

const Icon = ({ children }: IconProps) => {
  return (
    <div className={classes.icon}>{children}</div>
  );
};

export default Icon;
