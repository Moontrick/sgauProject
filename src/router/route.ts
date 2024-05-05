
import React from 'react';
import { AppRouteSection, AppRouteType, routes } from './routes';
import Docs from '../assets/icons/docs.svg';

export const appRoutes = [
  {
    id: AppRouteSection.receiveRawMaterials,
    icons: Docs,
    title: 'Поступление сырья',
    items: [
      {
        id: AppRouteType.test,
        title: 'Склады на колесах',
        href: routes[AppRouteType.test].build(),
      },
      {
        id: AppRouteType.home,
        title: 'Назад',
        href: routes[AppRouteType.home].build(),
      },
    ],
  },
  {
    id: AppRouteSection.receiveRawMaterials,
    icons: Docs,
    title: 'Поступление сырья',
    items: [
      {
        id: AppRouteType.test,
        title: 'Склады на колесах',
        href: routes[AppRouteType.test].build(),
      },
      {
        id: AppRouteType.home,
        title: 'Назад',
        href: routes[AppRouteType.home].build(),
      },
    ],
  },
];

