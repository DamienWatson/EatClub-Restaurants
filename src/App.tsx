import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantsWrapper from './views/restaurants-wrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RestaurantsWrapper />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
