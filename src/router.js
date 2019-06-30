import Dashboard from './pages/Dashboard/dashboard';
import Chart from './pages/Chart/Chart';
import Order from './pages/Order/Order';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';

const routes = [
    {
      path: '/',
      component: Login,
      exact: true,
      breadcrumbName: 'Login'
    },
    {
      path: '/Dashboard',
      component: Dashboard,
      breadcrumbName: 'Dashboard',
      routes: [
        {
          path: '/Dashboard/Chart',
          component: Chart,
          breadcrumbName: 'Chart'
        },
        {
          path: '/Dashboard/Order',
          component: Order,
          breadcrumbName: 'Order'
        },
        {
          path: '/Dashboard/Product',
          component: Product,
          breadcrumbName: 'Product'
        }
      ]
    }
  ];

  export default routes;