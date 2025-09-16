import React from 'react'
import { Link, useParams } from 'react-router-dom';
import OptionsIcon from './icons/options-icon';
import UserIcon from './icons/user-icon';
import EatClubIcon from './icons/eatclub-icon';
import BackIcon from './icons/back-icon';
import classes from './header.module.scss';
import IconButton from './icon-button';

const Header = () => {
  const params = useParams();

  return (
    <header className={classes.header}>
      <div className={classes.screenContent}>
        <IconButton rounded>
          <UserIcon size="28" />
        </IconButton>
        
        <Link to="/">
          {params.id === undefined
            ? <EatClubIcon size="28" />
            : <BackIcon size="28" />}
        </Link>
        
        <IconButton rounded>
          <OptionsIcon size="28" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
