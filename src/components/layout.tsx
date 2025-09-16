import React, { ReactNode, useEffect } from 'react';
import classes from './layout.module.scss';
import Header from './header';

type LayoutProps = {
  children: ReactNode,
};

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className={classes.container}>
      <Header />

      {children}
    </div>
  );
};

export default Layout;
