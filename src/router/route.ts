
import React from 'react';
import { AppRouteSection, AppRouteType, routes } from './routes';
import Docs from '../assets/icons/DocsIcon.svg';
import Byu from '../assets/icons/buy.svg';
import Defactura from '../assets/icons/Defactura.svg';
import User from '../assets/icons/UserIcon.svg'
export const appRoutes = [
  {
    id: AppRouteSection.user,
    icons: User,
    title: 'Пользователь',
  },
  {
    id: AppRouteSection.invoceRaw,
    icons: Docs,
    title: 'Накладные',
    items: [
      {
        id: AppRouteType.invoceList,
        title: 'Список накладных',
        href: routes[AppRouteType.invoceList].build(),
      },
      {
        id: AppRouteType.priceList,
        title: 'Прайс-лист поставщика',
        href: routes[AppRouteType.priceList].build(),
      },
    ],
  },
  {
    id: AppRouteSection.priceRaw,
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
  {
    id: AppRouteSection.defacturaRaw,
    icons: Defactura,
    title: 'Дефeктура',
    items: [
      {
        id: AppRouteType.defacturaPage,
        title: 'Отказ от поставщика',
        href: routes[AppRouteType.defacturaPage].build(),
      },
    ],
  },
];

