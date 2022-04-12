import React, { useState, useContext, useReducer } from "react";
import { productsData } from "../db/dbproducts";
import _ from "lodash";

// creat context for products to access it all over the program :
// 1. Creat context Component with React.creatContext
// 2. export context Component
const ProductsContext = React.createContext(); // for show state
const ProductsContextDispather = React.createContext(); // for setState

// const initialState = [
//   { title: "React.js", price: "99 $", quantity: 1, id: 1 },
//   { title: "JavaScript", price: "89 $", quantity: 1, id: 2 },
//   { title: "Node.js", price: "79 $", quantity: 1, id: 3 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const findIndex = state.findIndex((index) => index.id === action.id);
      // clone products
      const selectedItem = { ...state[findIndex] };
      selectedItem.quantity++;
      const cloneProduct = [...state];

      cloneProduct[findIndex] = selectedItem;

      return cloneProduct;
    }
    case "decrement": {
      const findIndex = state.findIndex((index) => index.id === action.id);
      // clone and update index
      const cloneIndex = { ...state[findIndex] };

      if (cloneIndex.quantity === 1) {
        const filterProducts = state.filter(
          (product) => product.id !== action.id
        );
        return filterProducts;
      } else {
        // clone state
        const cloneProduct = [...state];
        // update cloneProduct with cloneIndex
        cloneProduct[findIndex] = cloneIndex;
        cloneIndex.quantity--;
        return cloneProduct;
      }
    }
    case "edit": {
      const findIndex = state.findIndex((index) => index.id === action.id);
      // clone and update index
      const cloneIndex = { ...state[findIndex] };
      const input = action.event.target.value;
      cloneIndex.title = input;
      // clone state
      const cloneProduct = [...state];
      // update cloneProduct with cloneIndex
      cloneProduct[findIndex] = cloneIndex;
      return cloneProduct;
    }
    case "remove":
      const filterProducts = state.filter(
        (product) => product.id !== action.id
      );
      return filterProducts;
    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return productsData;
      } else {
        const availableSizes = productsData.filter(
          (product) => product.availableSize.indexOf(value) >= 0
        );
        return availableSizes;
      }
    }
    case "sort": {
      const sortValue = action.sortOptions.value;
      // clone the state because sort.method() mutate the array
      const cloneProduct = [...state];
      if (sortValue === "lowest") {
        // use loadash library
        return _.orderBy(cloneProduct, ["price"], ["asc"]);
      } else {
        return _.orderBy(cloneProduct, ["price"], ["desc"]);
      }
    }
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  // 3. provide ProductsContext.Provider to access it
  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispather.Provider value={dispatch}>
        {children}
      </ProductsContextDispather.Provider>
    </ProductsContext.Provider>
  );
};

export default CounterProvider;

export const useProduct = () => useContext(ProductsContext);
// write actions where ever your useContext is
export const useProuctAction = () => {
  return useContext(ProductsContextDispather);

  //   const onChangeHandler = (event, id) => {
  //     // find index
  //     const findIndex = product.findIndex((index) => index.id === id);
  //     // clone and update index
  //     const cloneIndex = { ...product[findIndex] };
  //     const input = event.target.value;
  //     cloneIndex.title = input;
  //     // clone state
  //     const cloneProduct = [...product];
  //     // update cloneProduct with cloneIndex
  //     cloneProduct[findIndex] = cloneIndex;
  //     setProduct(cloneProduct);
  //   };

  //   const removeHandler = (id) => {
  //     const filterProducts = product.filter((product) => product.id !== id);
  //     setProduct(filterProducts);
  //   };

  //   const increamentHandler = (id) => {
  //     // find index
  //     const findIndex = product.findIndex((index) => index.id === id);
  //     // clone products
  //     const selectedItem = { ...product[findIndex] };
  //     selectedItem.quantity++;
  //     const cloneProduct = [...product];

  //     cloneProduct[findIndex] = selectedItem;

  //     setProduct(cloneProduct);
  //   };

  //   const decreamentHandler = (id) => {
  //     // find index
  //     const findIndex = product.findIndex((index) => index.id === id);
  //     // clone and update index
  //     const cloneIndex = { ...product[findIndex] };

  //     if (cloneIndex.quantity === 1) {
  //       const filterProducts = product.filter((product) => product.id !== id);
  //       setProduct(filterProducts);
  //     } else {
  //       // clone state
  //       const cloneProduct = [...product];
  //       // update cloneProduct with cloneIndex
  //       cloneProduct[findIndex] = cloneIndex;
  //       cloneIndex.quantity--;
  //       setProduct(cloneProduct);
  //     }
  //   };

  //   return {
  //     onChangeHandler,
  //     removeHandler,
  //     increamentHandler,
  //     decreamentHandler,
  //   };
};
