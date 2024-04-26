import React, {useState} from "react";

function Item({ name, category }) {
  
  const [cart, setCart] = useState(false);
  
  const toggleCart = () => {
    setCart((cart) =>!cart);
  };
  const color = cart ? "purple" : "yellow";
  const itemClass = cart? "in-cart" : "";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart} style= {{background: color}}>{cart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
