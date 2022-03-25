import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemCard from "../itemCard/ItemCard";

function ShowItems(props) {
  const [jewels, setJewels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/jewels")
      .then((response) => {
        setJewels(response.data);
      })
      .catch((error) => {
        console.log("Error from ShowItems", error);
      });
  }, []);

  console.log("PrintItem:" + jewels);
  const itemList = jewels.map((item) => <ItemCard item={item} key={item._id} />);

  return (
    <div className="ShowItems">
      <div className="container">
          <ul className="list"><li>{itemList}</li></ul>
      </div>
    </div>
  );
}

export default ShowItems;
