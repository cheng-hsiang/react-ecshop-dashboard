import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import Dashboard from './pages/Dashboard/dashboard';
import Chart from './pages/Chart/Chart';
import Order from './pages/Order/Order';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import NoMatch from './pages/NoMatch';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch,HashRouter,Route} from 'react-router-dom';
import routes from './router.js';
ReactDOM.render(
    <BrowserRouter>
   
         <Route path="/App" component={ App }></Route>
         <Route path="/Login" component={ Login }></Route>
         <Route path="/dashboard" component={ Dashboard }></Route>
         <Route path="/dashboard/chart" component={ Chart }></Route>
         <Route path="/dashboard/order" component={ Order }></Route>
         <Route path="/dashboard/product" component={ Product }></Route>
         {/* <Route component={ NoMatch } /> */}
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
