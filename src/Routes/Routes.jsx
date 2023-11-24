import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
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
    ],
  },
]);

export default routes;
