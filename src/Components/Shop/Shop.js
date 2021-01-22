import React, { useEffect, useState } from 'react';
import Checkout from '../Checkout/Checkout';
import ProductPage from '../ProductPage/ProductPage';
import Home from '../Home/Home';
import HomeIcon from '../Icons/home.GIF';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './shop.css';

function Shop() {
  const [cartTotal, setCartTotal] = useState(0);
  
  const myCart = [];
  const [cart, setCart] = useState(myCart);
  
  return (
    <div className="shop">
      <Router>
<header className="webshop-header">
  <Link to="/" className="nav-link home-link">
    <img src={HomeIcon} alt="Home-icon" className="home-icon" />
  </Link>
  <Link to="/checkout" className="nav-link cart-link">
    Cart
  </Link>
</header>

<Switch>
  <Route path="/" exact={true}>
    <Home />
  </Route>
  <Route path="/checkout">
    <Checkout />
  </Route>
  <Route path="/products/:id">
    <ProductPage />
  </Route>
</Switch>
      </Router>
    </div>
  );
}

export default Shop;
