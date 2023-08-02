import React from 'react';
import Welcome from './components/Welcome';
import WeddingGroup from './components/WeddingGroup';
import OSA from './components/OSA';
import Wedding from './components/Wedding';
import WishList from './components/WishList';

export const routes = [
  {
    path: "/",
    name: 'home',
    exact: true,
    main: () => <Welcome />
  },
  {
    path: "/brollopsfolje",
    name: 'folje',
    main: () => <WeddingGroup />
  },
  {
    path: "/osa",
    name: 'osa',
    main: () => <OSA />
  },
  {
    path: "/brollopet",
    name: 'brollopet',
    main: () => <Wedding />
  },
  {
    path: "/wishlist",
    name: 'wishlist',
    main: () => <WishList />
  }
];