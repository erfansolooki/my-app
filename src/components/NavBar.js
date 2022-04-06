import React from "react";
import { BiCart } from "react-icons/bi";
import { useProduct } from "./Provider/ProviderProducts";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const product = useProduct();
  const totallItem = product.filter((product) => product.quantity > 0).length;
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
