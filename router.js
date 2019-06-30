import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Login from './components/pages/login'
import Products from './components/pages/Products'
import Coupons from '@/components/pages/Coupons';
import Orders from '@/components/pages/Orders';
import CustomerOrder from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import Index from '@/components/index';
import Checkout from '@/components/Checkout';
Vue.use(Router)


// export default new Router({
//   routes: [
//     {
//       path: '/admin',
//       name: 'Dashboard',
//       component:Dashboard,
//       meta: { requiresAuth: true },
//       children:[
//         {
//           path:'products',
//           name:'products',
//           component:products,
//           meta: { requiresAuth: true },
//         },
//       ] //需要登入被驗證
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path:'*',
//       redirect:'login'
//     },
//     {path: '/',
//     name: 'HelloWorld',
//     component: HelloWorld

//     }
 
    
//   ]
// })

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // {
    //   path: '*',
    //   redirect: 'login',
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
        
      ],
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/checkout/:orderId',
      name: 'Checkout',
      component: Checkout,
    }

  ],
});