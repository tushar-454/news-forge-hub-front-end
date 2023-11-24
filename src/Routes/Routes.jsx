import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import UserProfile from '../Pages/UserProfile';
import Root from './root';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'profile',
        element: <UserProfile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default routes;
