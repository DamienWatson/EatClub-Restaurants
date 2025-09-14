import React, { ReactNode } from 'react';
import classes from './icon-button.module.scss';

type IconButtonProps = {
  children: ReactNode,
  label?: string,
  width?: string,
}

const IconButton = ({
  children,
  label,
  width,
}: IconButtonProps) => {
  return (
    <button className={`${classes.button} ${width ? classes[`width-${width}`] : ''}`}>
      {children}
      {label}
    </button>
  );
};

export default IconButton;
