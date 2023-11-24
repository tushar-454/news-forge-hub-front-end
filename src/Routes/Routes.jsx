import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import UserProfile from '../Pages/UserProfile';
import Root from './root';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <UserProfile />,
      },
    ],
  },
]);

export default routes;
