import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EmptyPage from '../pages/EmptyPage';

import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/react-coding-challenge',
    element: <Home />,
  },
  {
    path: '/reuters-connect',
    element: <EmptyPage title='Reuters Connect' />,
  },
  {
    path: '/westlaw',
    element: <EmptyPage title='Westlaw' />,
  },
  {
    path: '/onesource',
    element: <EmptyPage title='ONESOURCE' />,
  },
  {
    path: '/checkpoint',
    element: <EmptyPage title='Checkpoint' />,
  },
  {
    path: '/clear',
    element: <EmptyPage title='Clear' />,
  },
  {
    path: '/onesource-global-trade',
    element: <EmptyPage title='ONESOURCE Global Trade' />,
  },
  {
    path: '/legal',
    element: <EmptyPage title='Legal' />,
  },
  {
    path: '/news-media',
    element: <EmptyPage title='News & Media' />,
  },
  {
    path: '/tax-accounting',
    element: <EmptyPage title='Tax & Accounting' />,
  },
  {
    path: '/risk-fraud',
    element: <EmptyPage title='Risk & Fraud' />,
  },
  {
    path: '/corporations',
    element: <EmptyPage title='Corporations' />,
  },
  {
    path: '/government',
    element: <EmptyPage title='Government' />,
  },
  {
    path: '/power-partnership',
    element: <EmptyPage title='The power of partnership' />,
  },
  {
    path: '/profesional-services-firms',
    element: <EmptyPage title='Profesional services firms' />,
  },
  {
    path: '/profile',
    element: <EmptyPage title='Profile' />,
  },
  {
    path: '/settings',
    element: <EmptyPage title='Settings' />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
