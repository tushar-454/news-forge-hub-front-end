import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import UserProfile from '../Pages/UserProfile';

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
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default routes;
