import "./Product.css";
import styles from "./App.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect, useContext } from "react/cjs/react.development";
import { UserContext } from "../App";

const Product = ({
  onChange,
  onAdd,
  onDecrement,
  onDelete,
  click,
  name,
  price,
  quantity,
}) => {
  useEffect(() => {
    // console.log("useEffect");
    return () => console.log("CWU");
  }, []);

  return (
    <div className="product" onClick={click}>
      <p>our course is : {name}</p>
      <p>and it's price is : {price}</p>
      <p className={styles.value}>{quantity}</p>
      <input type="text" onChange={onChange} value={name} />
      <button onClick={onAdd}>+</button>
      <button
        onClick={onDecrement}
        className={`${styles.decrement} ${quantity === 1 && styles.remove}`}
      >
        {quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button onClick={onDelete} className={styles.delete}>
        Delete
      </button>
    </div>
  );
};

export default Product;
