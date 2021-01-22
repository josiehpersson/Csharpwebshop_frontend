import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HeadPhones from './orangeheadphones.JPG';
import ProductList from '../ProductList/ProductList';

import './home.css';

function Home() {
const defaultValue = [];
const [products, setProducts] = useState(defaultValue); 

useEffect(() => {
  axios.get('https://localhost:5001/product')
  .then(res => {
    setProducts(res.data)
  })
  .catch(err => {
    console.log(err);
  })
},[]);

return (
  <div className="home-container">
    <div className="img-container">
    </div>
        <ProductList product={products} />
    </div>
  );
}

export default Home;
