import Product from "./Product";
import { useProduct, useProuctAction } from "./Provider/ProviderProducts";
import ProviderProducts from "./Provider/ProviderProducts";

import "./ProductList.css";

const ProductList = (props) => {
  const product = useProduct();
  const dispacth = useProuctAction();

  if (product.length === 0) {
    return <div className="empty-cart">there is no product in your cart</div>;
  }

  return (
    <div className="product-list">
      {product.map((product) => {
        return (
          <ProviderProducts>
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
              quantity={product.quantity}
              onChange={(event) =>
                dispacth({ type: "edit", id: product.id, event: event })
              }
              onDelete={() => dispacth({ type: "remove", id: product.id })}
              onAdd={() => dispacth({ type: "increment", id: product.id })}
              onDecrement={() =>
                dispacth({ type: "decrement", id: product.id })
              }
            />
          </ProviderProducts>
        );
      })}
    </div>
  );
};

export default ProductList;
