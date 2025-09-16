import React, { ReactNode } from 'react';
import classes from './icon-button.module.scss';

type IconButtonProps = {
  children: ReactNode,
  label?: string,
  width?: string,
  rounded?: boolean,
}

const IconButton = ({
  children,
  label,
  width,
  rounded,
}: IconButtonProps) => {
  return (
    <button className={`
      ${classes.button}
      ${width ? classes[`width-${width}`] : ''}
      ${rounded ? classes.rounded : '' }
    `}>
      {children}
      {label}
    </button>
  );
};

export default IconButton;
