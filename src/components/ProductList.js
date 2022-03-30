import React, { Component } from "react";
import Product from "./Product";

import "./ProductList.css";

class ProductList extends Component {
  // state = {};

  render() {
    const { product, onChange, onRemove, onIncrement, onDecrement } =
      this.props;
    if (product.length === 0) {
      return <div className="empty-cart">there is no product in your cart</div>;
    }
    return (
      <div className="product-list">
        {this.props.product.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
              quantity={product.quantity}
              onChange={(event) => onChange(event, product.id)}
              onDelete={() => onRemove(product.id)}
              onAdd={() => onIncrement(product.id)}
              onDecrement={() => onDecrement(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
