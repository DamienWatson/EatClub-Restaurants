import React from 'react'
import Icon from './icon';
import classes from './header.module.scss';

const Header = () => (
  <header className={classes.header}>
    <Icon>U</Icon>
    <Icon>EC</Icon>
    <Icon>O</Icon>
  </header>
);

export default Header;
