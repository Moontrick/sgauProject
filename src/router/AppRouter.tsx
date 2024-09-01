import {Routes, Route, Navigate, Router} from 'react-router-dom';
import {routes} from './routes';
import {HomePage} from '../app/pages/HomePage';

import { TestPage } from '../app/pages/TestPage';
import { InvoceList } from '../app/pages/InvoceList';
import { OrderList } from '../app/pages/OrderList/OrderList';
import { PriceListPage } from '../app/pages/PriceList';
import { DefacturaPage } from '../app/pages/Defactura';


type RouterItem = {path: string; element: React.ReactNode};

const router: RouterItem[] = [
    {
        path: routes.test.template, 
        element: <TestPage />
    },
    {
        path: routes.home.template, 
        element: <HomePage />
    },
    {
        path: routes.orderList.template, 
        element: <OrderList />
    },
    {
        path: routes.invoceList.template, 
        element: <InvoceList />
    },
    {
        path: routes.priceList.template, 
        element: <PriceListPage />
    },
    {
        path: routes.defacturaPage.template, 
        element: <DefacturaPage />
    },
]

export const AppRouter = () => {
  return (
    <div style={{marginLeft: '70px'}}>
        <Routes>
        {router.map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
        ))}
        <Route path="/" element={<Navigate to={routes.home.template} />} />
        </Routes>
    </div>
  );
};