import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import UserProfile from '../Pages/UserProfile';
import PublicRoutes from './PublicRoutes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
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
    element: (
      <PublicRoutes>
        <Login />
      </PublicRoutes>
    ),
  },
  {
    path: '/signup',
    element: (
      <PublicRoutes>
        <Signup />
      </PublicRoutes>
    ),
  },
]);

export default routes;
