
import React from 'react';
import { AppRouteSection, AppRouteType, routes } from './routes';
import Docs from '../assets/icons/DocsIcon.svg';
import Byu from '../assets/icons/buy.svg';
import User from '../assets/icons/UserIcon.svg'
export const appRoutes = [
  {
    id: AppRouteSection.user,
    icons: User,
    title: 'Пользователь',
    items: [
      {
        id: AppRouteType.test,
        title: 'Настройки пользователя',
        href: routes[AppRouteType.test].build(),
      },
    ],
  },
  {
    id: AppRouteSection.receiveRawMaterials,
    icons: Docs,
    title: 'Накладные',
    items: [
      {
        id: AppRouteType.invoceList,
        title: 'Список накладных',
        href: routes[AppRouteType.invoceList].build(),
      },
      {
        id: AppRouteType.test,
        title: 'unTitled',
        href: routes[AppRouteType.test].build(),
      },
    ],
  },
  {
    id: AppRouteSection.receiveRawSclad,
    icons: Byu,
    title: 'Заказы',
    items: [
      {
        id: AppRouteType.orderList,
        title: 'Список заказов',
        href: routes[AppRouteType.orderList].build(),
      },
    ],
  },
];

