import React from 'react'
import { Link, useParams } from 'react-router-dom';
import OptionsIcon from './icons/options-icon';
import UserIcon from './icons/user-icon';
import EatClubIcon from './icons/eatclub-icon';
import BackIcon from './icons/back-icon';
import classes from './header.module.scss';

const Header = () => {
  const params = useParams();

  return (
    <header className={classes.header}>
      <UserIcon size="28" />
      
      <Link to="/">
        {params.id === undefined
          ? <EatClubIcon size="28" colour="#ce4837" />
          : <BackIcon size="28" colour="#ce4837" />}
      </Link>
      
      <OptionsIcon size="28" />
    </header>
  );
};

export default Header;
