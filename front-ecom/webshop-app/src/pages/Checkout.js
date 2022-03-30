import React, { useEffect, useState } from 'react';
import ItemCard from '../components/itemCard/ItemCard';

function Checkout() {

    const [cart, setCart] = useState("");

    useEffect(async() => {
        let cartId = localStorage.getItem("cart");
        let response = await fetch(`http://localhost:1337/carts/${cartId}`, {
                        method: "GET",
                    
                    });
                    setCart(await response.json())
    },[])
    
    let cartList = "";
    if(cart) {
    cartList = cart.products.map((item) => <ItemCard item={item} key={item._id} />);
    }

  return (
    <div>
    <h1>CHECKOUT PAGE</h1>
    <ul className="itemList">
    {cartList}
  </ul>
  <button onClick={
      async() => {
        let response = await fetch("http://localhost:1337/orders", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                products: cart.products,
                status: "payed"
            })
        });
  localStorage.removeItem("cart");
  setCart("");
  }}>PAY</button>
    </div>
  )
}

export default Checkout;
