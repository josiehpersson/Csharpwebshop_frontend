import React, {useEffect, useState} from 'react';
import OrderItem from '../OrderItem/OrderItem';
import axios from 'axios';

export default function Admin () {
    const defaultValue = [];

    const [orders, setOrders] = useState(defaultValue);

    useEffect(() => {
        axios.get(`https://localhost:5001/order`)
        .then(res=> {
            console.log(res)
            setOrders(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
    }, [])
return(
    <div className="admin-container">
        <OrderItem order={orders}></OrderItem>
    </div>
)
}