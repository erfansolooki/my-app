import React from "react";
import { BiCart } from "react-icons/bi";

import styles from "./NavBar.module.css";

const NavBar = ({ totallItem }) => {
  return (
    <div className={styles.navBar}>
      <h1>Shopping</h1>
      <span className={styles.cart}>
        <BiCart className={styles.cartItem} />
        <span className={styles.cartQuantity}>{totallItem}</span>
      </span>
    </div>
  );
};

export default NavBar;
