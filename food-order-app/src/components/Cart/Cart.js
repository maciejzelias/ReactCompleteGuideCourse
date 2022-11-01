import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart(props) {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    cartContext.addItem(cartItem);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {" "}
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}{" "}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems ? <button className={styles.button}>Order</button> : null}
      </div>
    </Modal>
  );
}
