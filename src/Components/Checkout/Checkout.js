import React, { useEffect, useState, MouseEvent } from 'react';
import './checkout.css';
import UserForm from '../UserForm/UserForm';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import axios from 'axios';


export default function Checkout(props) {
  const formDefault = {
    firstname: '',
    lastname: '',
    address: '',
    zipcode: '',
    city: '',
  };
  const [userForm, setUserForm] = useState(formDefault);

  const cartDefault = [];
  const [shoppingCart, setShoppingCart] = useState(cartDefault);

  const [sum, setSum] = useState(0);

  const myCart = [];

  useEffect(() => {
    myCart.push(...shoppingCart);
    myCart.push(...props.myShoppingCart);
    setShoppingCart(myCart);
    let total = 0;
    for (let i = 0; i < myCart.length; i++) {
      total += sum + myCart[i].price;
    }
    setSum(total);
  }, []);

  const updateForm = (formValue) => {
    setUserForm(formValue);
  }

  const placeOrder = (e) => {
    const newOrder = {
      totalPrice: sum,
      orderRows: {
        ...shoppingCart
      },
      customerDTO: {
        Name: JSON.stringify(userForm.firstname) + JSON.stringify(userForm.lastname),
        Address:  JSON.stringify(userForm.address),
        ZipCode: JSON.stringify(userForm.zipcode),
        City: JSON.stringify(userForm.city)
      }, 
    };
    console.log(newOrder);

    const baseURL = `https://localhost:5001/order`;

    axios
      .post(baseURL, newOrder)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const cartItems = shoppingCart.map((product) => {
    const removeItem = (e) => {
      const tempCart = [...shoppingCart];
      const item = {
        productId: product.productId,
        price: product.price,
      };
      let itemIndex = tempCart.findIndex(function (ind) {
        return ind.productId == item.productId;
      });
      if (itemIndex !== -1) {
        tempCart.splice(itemIndex, 1);
      }
      let total = 0;
      for (let i = 0; i < tempCart.length; i++) {
        total += sum + tempCart[i].amount;
      }
      setSum(total);
      setShoppingCart(tempCart);
    }
    return (
      <CheckoutItem
        name={product.productId}
        price={product.price}
        updateCart={removeItem}
      />
    );
  });

  return (
    <div className="checkout-container">
      <div className="user-information">
        <UserForm updateParent={updateForm} />
      </div>
      <div className="checkout-cart-container">
          <i className="fas fa-shopping-basket"></i>
        <div className="shopping-cart">
          {cartItems}
        </div>
        <p className="total">Total: {sum} :-</p>
        <button type="button" onClick={placeOrder}>
          Check out
        </button>
      </div>
    </div>
  );
}
