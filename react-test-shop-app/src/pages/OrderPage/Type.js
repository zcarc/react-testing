import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Products from "./Products";

function Type({ orderType }) {
  const [items, setItems] = useState([]);

  const loadItems = useCallback(async (orderType) => {
    try {
      const res = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(res.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const ItemComponents = orderType === "products" ? Products : null;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  useEffect(() => {
    loadItems(orderType);
  }, []);

  return <div>{optionItems}</div>;
}

export default Type;
