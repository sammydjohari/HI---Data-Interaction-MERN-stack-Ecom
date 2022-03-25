import React from "react";
import { Link } from "react-router-dom";
import './ItemCard.css';

const ItemCard = (props) => {
    const item = props.item;

  return (
    <div className="card-container">
        <img src={ item.image } alt="item image"></img>
        <div className="desc">
            <h3>{ item.title }</h3>
            <p>{item.price}€</p>
        </div>
    </div>
  )
}

export default ItemCard;
