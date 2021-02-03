import React from 'react';
import './checkoutitem.css';

export default function CheckoutItem(props) {

    return(
        <div className="checkout-item">
            <div className="checkout-item-info">
                <p>{props.title}</p>
                <p>{props.price}:-</p>
            </div>
        </div>
    );
}