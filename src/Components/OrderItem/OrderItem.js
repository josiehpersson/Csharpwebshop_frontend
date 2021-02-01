import React from 'react';
import './orderitem.css';

export default function OrderItem(props) {
    let ordersHTML = props.order.map((order) => {
        return(
            <div key={order.productId} className="order-item-container">
                <div className="order">
                    <p>Customer:</p>
                    <p>{order.customerDTO}</p>
                </div>
                <div className="order">
                    <p>Order:</p>
                    <p>{JSON.stringify(order.OrderRows)}</p>
                </div>
                <div className="order">
                    <p>Total Price:</p>
                    <p>{order.totalPrice}</p>
                </div>
            </div>
        );
    });

    return(
        <div>
            {ordersHTML}
        </div>
    )
} 