import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard';
import Root from '../Layout/Root';
import AddArticles from '../Pages/AddArticles';
import AddPublications from '../Pages/AddPublications';
import AllArticles from '../Pages/AllArticles';
import AllPaymentHistory from '../Pages/AllPaymentHistory';
import AllPublications from '../Pages/AllPublications';
import AllStatistics from '../Pages/AllStatistics';
import AllUser from '../Pages/AllUser';
import Articles from '../Pages/Articles';
import ArticlesDetails from '../Pages/ArticlesDetails';
import ArticlesUpdate from '../Pages/ArticlesUpdate';
import Checkout from '../Pages/Checkout';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import MyArticleView from '../Pages/MyArticleView';
import MyArticles from '../Pages/MyArticles';
import PremiumArticles from '../Pages/PremiumArticles';
import Signup from '../Pages/Signup';
import Subscriptions from '../Pages/Subscriptions';
import UserProfile from '../Pages/UserProfile';
import AdminRoutes from './AdminRoutes';
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
            <Articles />
          </PrivateRoutes>
        ),
      },
      {
        path: '/all-articles/articles/:id',
        element: (
          <PrivateRoutes>
            <ArticlesDetails />
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
        path: 'payment',
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
      {
        path: 'my-articles',
        element: (
          <PrivateRoutes>
            <MyArticleView />
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
            path: 'articles',
            element: (
              <PrivateRoutes>
                <AdminRoutes>
                  <AllArticles />
                </AdminRoutes>
              </PrivateRoutes>
            ),
          },
          {
            path: 'users',
            element: (
              <PrivateRoutes>
                <AdminRoutes>
                  <AllUser />
                </AdminRoutes>
              </PrivateRoutes>
            ),
          },
          {
            path: 'add-publications',
            element: (
              <PrivateRoutes>
                <AdminRoutes>
                  <AddPublications />
                </AdminRoutes>
              </PrivateRoutes>
            ),
          },
          {
            path: 'publishers',
            element: (
              <PrivateRoutes>
                <AdminRoutes>
                  <AllPublications />
                </AdminRoutes>
              </PrivateRoutes>
            ),
          },
          {
            path: 'statistics',
            element: (
              <PrivateRoutes>
                <AdminRoutes>
                  <AllStatistics />
                </AdminRoutes>
              </PrivateRoutes>
            ),
          },
          {
            path: 'payment-history',
            element: (
              <PrivateRoutes>
                <AdminRoutes>
                  <AllPaymentHistory />
                </AdminRoutes>
              </PrivateRoutes>
            ),
          },
          // user dashboard routes
          {
            path: 'my-articles',
            element: (
              <PrivateRoutes>
                <MyArticles />
              </PrivateRoutes>
            ),
          },
          {
            path: 'update',
            element: (
              <PrivateRoutes>
                <ArticlesUpdate />
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
