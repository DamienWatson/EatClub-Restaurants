import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../slices/ecrSlice';
import classes from './loader.module.scss';
import Layout from './layout';

type LoaderProps = {
  Component: any,
  load: () => any,
}

const Loader = ({
  Component,
  load,
}: LoaderProps) => {
  const isLoading = useSelector((state:RootState) => state.isLoading);
  const firstLoad = useSelector((state:RootState) => state.firstLoad);
  const dispatch = useDispatch();

  const loadPage = () => {
    if (firstLoad) {
      load();
    } else {
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    loadPage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <p className={classes.message}>Loading...</p>
      </Layout>
    );
  }

  return Component;
};

export default Loader;
