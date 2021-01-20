import React from 'react';
import ListItem from '../ListItem/ListItem';
import './productlist.css';
function ProductList(props) {
let productsHTML = props.product.map((product) => {
  return(
    <ListItem
    key={product.Id}
    title={product.Title}
    image ={product.Image}
    alt={`${product.Title}`}
    price={product.Price}
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
