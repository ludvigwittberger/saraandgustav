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
    path: "/wedding-entourage",
    name: 'wedding-entourage',
    main: () => <WeddingGroup />
  },
  {
    path: "/rsvp",
    name: 'RSVP',
    main: () => <OSA />
  },
  {
    path: "/wedding",
    name: 'wedding',
    main: () => <Wedding />
  },
  {
    path: "/wishlist",
    name: 'wishlist',
    main: () => <WishList />
  }
];