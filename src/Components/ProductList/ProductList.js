import React from 'react';
import ListItem from '../ListItem/ListItem';
import './productlist.css';
function ProductList(props) {
let productsHTML = props.product.map((product) => {
  return(
    <ListItem
    key={product.id}
    title={product.title}
    image ={product.image}
    alt={`${product.title}`}
    price={product.price}
    link={`/productpage`}
    /> 
  )
})
  
  return (
    <div className="productlist-container">
      {productsHTML}
    </div>
  );
}

export default ProductList;
