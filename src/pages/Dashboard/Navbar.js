import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const logout = props.logout
  return (
    <div className="navbar">
         <div className="title"><Link to="/dashboard/chart">ShopName</Link></div>
        <ul className="snip1135 ">    
            <li><Link to="/dashboard/chart" >chart</Link></li>
            <li><Link to="/dashboard/product" >product</Link></li>
            <li><Link to="/dashboard/order">order</Link></li>
           <li onClick={ logout } style={{position: 'absolute',right: '4%'}}><a href="#">logout</a></li> 
        </ul>
    </div>
  );
}

export default Navbar;
