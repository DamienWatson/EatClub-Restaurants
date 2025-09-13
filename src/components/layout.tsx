import React, { ReactNode } from 'react';
import classes from './layout.module.scss';
import Header from './header';

type LayoutProps = {
  children: ReactNode,
};

const Layout = ({ children }: LayoutProps) => (
  <div className={classes.container}>
    <Header />

    {children}
  </div>
);

export default Layout;
