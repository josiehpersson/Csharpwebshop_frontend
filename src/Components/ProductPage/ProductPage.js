import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './productpage.css';

function ProductPage(props) {
  const [productInfo, setProductInfo] = useState(Object);
  let {id} = useParams();

  useEffect(()=> {
    axios
    .get(
      `https://localhost:5001/product/${id}`
    )
    .then((res) => {
      setProductInfo(res.data);
    })
    .catch((err)=> {
      console.log(err);
    })
  },[]);

  const handleClick = () => {
    let product = {
      title: productInfo.title,
      productId : productInfo.id,
      price : productInfo.price 
    };
    props.updateCount(product);
  }


  return (
    <div className="productpage-container">
      <img src={productInfo.image} alt={`${productInfo.title} image`} className={`${productInfo.title} image`}/>
      <div className="productinfo-container">
        <div className="productinfo">
          <h5>{productInfo.title}</h5>
          <p>{productInfo.description}</p>
        </div>
        <p className="pricetag">{productInfo.price}:-</p>
        <button type="button" className="cart-btn" onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}

export default ProductPage;
