import React, { ReactNode } from 'react';
import classes from './button.module.scss';

type ButtonProps = {
  children: ReactNode,
  onClick?: () => void,
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
