import React from 'react';
import './checkoutitem.css';

export default function CheckoutItem(props) {
    const handleClick = () => {
        props.updateCart(props.title);
    }

    return(
        <div className="checkout-item">
            <div className="checkout-item-info">
                <p>{props.title}</p>
                <p>{props.price}</p>
            </div>
            <div className="delete-btn-container">
                <button type="button" onClick={handleClick}>
                    Delete item
                </button>
            </div>
        </div>
    );
}