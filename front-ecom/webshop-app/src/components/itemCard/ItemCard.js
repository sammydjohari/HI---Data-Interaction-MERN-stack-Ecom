import React from "react";
import './ItemCard.css';

const ItemCard = (props) => {
    const item = props.item;

    let cart = [];
    let order = [];

    function addtocart() {
        console.log("added to cart");

    }

    function buynow() {
        console.log("go to checkout and buy now");
    }

  return (
    <div className="card-container">
        <img src={ item.image } alt="item image"></img>
        <div className="desc">
            <h3>{ item.title }</h3>
            <p>{item.price}€</p>
            <div id="shopbuttons">
            <button onClick={addtocart}>Add to cart</button>
            <button onClick={buynow}>Buy now</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCard;
