import React from 'react';
import Icon from './icon';
import MenuIcon from './icons/menu-icon';
import ContactIcon from './icons/contact-icon';
import LocationMapIcon from './icons/location-map-icon';
import HeartIcon from './icons/heart-icon';
import classes from './details-menu.module.scss';
import IconButton from './icon-button';

const DetailsMenu = () => {
  return (
    <div className={classes.container}>
      <IconButton
        label="Menu"
        width="xxl"
      >
        <MenuIcon size="32" />
      </IconButton>

      <IconButton
        label="Call us"
        width="xxl"
      >
        <ContactIcon size="32" />
      </IconButton>

      <IconButton
        label="Location"
        width="xxl"
      >
        <LocationMapIcon size="32" />
      </IconButton>

      <IconButton
        label="Favourite"
        width="xxl"
      >
        <HeartIcon size="32" />
      </IconButton>
    </div>
  );
};

export default DetailsMenu;
