import React, { useState, useMemo } from "react";
import ChildUseMemo from "./ChildUseMemo";

export default function DemoHookUseMemo(props) {
  let [like, setLike] = useState(1);
  const renderCart = () => {
    let cart = [
      { id: 1, name: "iphone", price: 1000 },
      { id: 2, name: "samsung", price: 900 },
      { id: 3, name: "xiaomi", price: 700 },
    ];
    return cart;
  };
  const cartMemo = useMemo(renderCart, [like]);
  return (
    <div className="m-5">
      Like: {like} ♥<br></br>
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br></br>
      <br></br>
      <ChildUseMemo cart={cartMemo}></ChildUseMemo>
    </div>
  );
}
