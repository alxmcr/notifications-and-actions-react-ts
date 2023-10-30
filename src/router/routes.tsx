import { RouteObject, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { protectedLoader } from './loaders';

export const routes: RouteObject[] = [
  {
    id: 'home',
    path: '/',
    element: <HomePage />,
    loader: protectedLoader,
  },
];

export const appRouter = createBrowserRouter(routes);
