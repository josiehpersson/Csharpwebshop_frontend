import React from 'react';
import {Link} from 'react-router-dom';
import './listitem.css';

function ListItem(props){
return (
    <div 
    className="listitem"
    key={props.id}
    data-info={[props.price, props.title]}>
        <h5>{props.title}</h5>
        <div className="product-info">
        <img className="product-img" src={props.image} alt={props.title} />
        <p className="pricetag">{props.price}:-</p>
        </div>
        <Link to={props.link}>
            <button className="info-btn">INFO</button>
        </Link>
    </div>
)
}
export default ListItem;