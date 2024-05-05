import {Routes, Route, Navigate, Router} from 'react-router-dom';
import {routes} from './routes';
import {HomePage} from '../app/pages/HomePage';
import { TestPage } from '../app/pages/TestPage';
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
]
router.forEach(({ element, path }) => console.log(element, path))
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