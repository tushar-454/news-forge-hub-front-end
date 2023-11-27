import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard';
import Root from '../Layout/Root';
import AddArticles from '../Pages/AddArticles';
import AddPublications from '../Pages/AddPublications';
import AllArticles from '../Pages/AllArticles';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import MyArticles from '../Pages/MyArticles';
import PremiumArticles from '../Pages/PremiumArticles';
import Signup from '../Pages/Signup';
import Subscriptions from '../Pages/Subscriptions';
import UserProfile from '../Pages/UserProfile';
import PrivateRoutes from './PrivateRoutes';
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
        element: (
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: 'add-articles',
        element: (
          <PrivateRoutes>
            <AddArticles />
          </PrivateRoutes>
        ),
      },
      {
        path: 'all-articles',
        element: (
          <PrivateRoutes>
            <AllArticles />
          </PrivateRoutes>
        ),
      },
      {
        path: 'subscriptions',
        element: (
          <PrivateRoutes>
            <Subscriptions />
          </PrivateRoutes>
        ),
      },
      {
        path: 'my-articles',
        element: (
          <PrivateRoutes>
            <MyArticles />
          </PrivateRoutes>
        ),
      },
      {
        path: 'premium-articles',
        element: (
          <PrivateRoutes>
            <PremiumArticles />
          </PrivateRoutes>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: 'add-publications',
            element: (
              <PrivateRoutes>
                <AddPublications />
              </PrivateRoutes>
            ),
          },
        ],
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
