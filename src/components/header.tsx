import React from 'react'
import { Link } from 'react-router-dom';
import Icon from './icon';
import classes from './header.module.scss';
import OptionsIcon from './icons/options-icon';
import UserIcon from './icons/user-icon';
import EatClubIcon from './icons/eatclub-icon';

const Header = () => (
  <header className={classes.header}>
    <Icon>
      <UserIcon />
    </Icon>
    
    <Link to="/">
      <Icon>
        <EatClubIcon colour="#ce4837" />
      </Icon>
    </Link>
    
    <Icon>
      <OptionsIcon />
    </Icon>
  </header>
);

export default Header;
