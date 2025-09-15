import React from 'react'
import { Link, useParams } from 'react-router-dom';
import classes from './header.module.scss';
import OptionsIcon from './icons/options-icon';
import UserIcon from './icons/user-icon';
import EatClubIcon from './icons/eatclub-icon';
import BackIcon from './icons/back-icon';

const Header = () => {
  const params = useParams();

  return (
    <header className={classes.header}>
      <UserIcon />
      
      <Link to="/">
        {params.id === undefined
          ? <EatClubIcon colour="#ce4837" />
          : <BackIcon />}
      </Link>
      
      <OptionsIcon />
    </header>
  );
};

export default Header;
