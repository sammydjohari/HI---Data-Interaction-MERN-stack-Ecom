import React from "react";
import './ItemCard.css';
import { useNavigate } from 'react-router-dom';

const ItemCard = (props) => {
    const item = props.item;
    let navigate = useNavigate();

  return (
    <div className="card-container">
        <img src={ item.image } alt="item image"></img>
        <div className="desc">
            <h3>{ item.title }</h3>
            <p>{item.price}€</p>
            <div id="shopbuttons">
            <button onClick={async() => {
                 let cartId = localStorage.getItem("cart");
                 if(cartId){
                    let response = await fetch(`http://localhost:1337/carts/${cartId}`, {
                        method: "GET",
                    });
       let currentCart = await response.json();
       currentCart.products.push(item);
       await fetch(`http://localhost:1337/carts/${cartId}`, {
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(currentCart)
                    });
                 }else {
                    let response = await fetch("http://localhost:1337/carts", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            products: [item],
                            status: "carted"
                        })
                    });
                    let cartId = await response.json();
                    localStorage.setItem("cart", cartId);
                 }
                 
                console.log(item);
            }}>Add +</button>
            <button onClick={async() => {
                let response = await fetch("http://localhost:1337/carts", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        products: [item],
                        status: "carted"
                    })
                });
                let cartId = await response.json();
                localStorage.setItem("cart", cartId);
                navigate("/checkout")
                console.log(item)}}>Buy now</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCard;
