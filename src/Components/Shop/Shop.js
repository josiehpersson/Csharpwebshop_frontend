import React, { useEffect, useState } from 'react';
import Checkout from '../Checkout/Checkout';
import ProductPage from '../ProductPage/ProductPage';
import Home from '../Home/Home';
import HomeIcon from '../Icons/home.GIF';
import Cart from '../Cart/Cart';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './shop.css';

function Shop() {
  const [cartTotal, setCartTotal] = useState(0);
  
  const myCart = [];
  const [cart, setCart] = useState(myCart);

  useEffect(() => {
    setCart(myCart);
  },[]);


  const addToCart = (props) => {
    myCart.push(...cart);
    let product = {
      title: props.title,
      productId : props.productId,
      price : props.price,
    };
    myCart.push(product);
    setCart(myCart);
    console.log(myCart, cart);
    setCartTotal(cartTotal + 1);
  }
  
  return (
    <div className="shop">
      <Router>
<header className="webshop-header">
  <Link to="/" className="nav-link home-link">
    <img src={HomeIcon} alt="Home-icon" className="home-icon" />
  </Link>
  <Link to="/checkout" className="nav-link cart-link">
    <Cart total={cartTotal} />
  </Link>
</header>

<Switch>
  <Route path="/" exact={true}>
    <Home />
  </Route>
  <Route path="/checkout">
    <Checkout myShoppingCart={cart} />
  </Route>
  <Route path="/checkout">
    <Cart total = {cartTotal} />
  </Route>
  <Route path="/product/:id">
    <ProductPage updateCount={addToCart} />
  </Route>
</Switch>
      </Router>
    </div>
  );
}

export default Shop;
