import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantsWrapper from './views/restaurants-wrapper';
import RestaurantDetailsWrapper from './views/restaurant-details-wrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RestaurantsWrapper />,
  },
  {
    path: '/:id',
    element: <RestaurantDetailsWrapper />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
