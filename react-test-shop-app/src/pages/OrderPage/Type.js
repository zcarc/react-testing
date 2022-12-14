import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ErrorBanner from "../../components/ErrorBanner";
import Options from "./Options";
import Products from "./Products";

function Type({ orderType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const loadItems = useCallback(async (orderType) => {
    try {
      const res = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(res.data);
    } catch (error) {
      setError(true);
    }
  }, []);

  const ItemComponents = orderType === "products" ? Products : Options;

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

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격:</p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "column",
        }}
      >
        {optionItems}
      </div>
    </>
  );
}

export default Type;
