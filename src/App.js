import React, { Component } from "react";
import ProductList from "./components/ProductList";
import styles from "./components/App.module.css";
import NavBar from "./components/NavBar";
import CounterClass from "./components/CounterClass/CounterClass.jsx";
import FunctionalCounter from "./components/FunctionalCounter/FunctionalCounter.jsx";
import ClassShow from "./components/ClassShow";
import FunctionalShow from "./components/FunctionalShow";
import Wrapper from "./components/HOC/Wrapper";
import Click from "./components/ClickComponent/Click";
import Hover from "./components/HoverComponent/Hover";
import RefClass from "./components/ref/refClass";
import RefFunctional from "./components/ref/refFuctional";
import Input from "./components/tamrin/Input.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js constructor");
  }
  state = {
    product: [
      { title: "React.js", price: "99 $", quantity: 1, id: 1 },
      { title: "JavaScript", price: "89 $", quantity: 1, id: 2 },
      { title: "Node.js", price: "79 $", quantity: 1, id: 3 },
    ],
    isShow: true,
  };

  onChangeHandler = (event, id) => {
    // find index
    const findIndex = this.state.product.findIndex((index) => index.id === id);
    // clone and update index
    const cloneIndex = { ...this.state.product[findIndex] };
    const input = event.target.value;
    cloneIndex.title = input;
    // clone state
    const cloneProduct = [...this.state.product];
    // update cloneProduct with cloneIndex
    cloneProduct[findIndex] = cloneIndex;
    this.setState({ product: cloneProduct });
  };

  removeHandler = (id) => {
    const filterProducts = this.state.product.filter(
      (product) => product.id !== id
    );
    this.setState({ product: filterProducts });
  };

  increamentHandler = (id) => {
    // find index
    const findIndex = this.state.product.findIndex((index) => index.id === id);
    // clone products
    const selectedItem = { ...this.state.product[findIndex] };
    selectedItem.quantity++;
    const cloneProduct = [...this.state.product];

    cloneProduct[findIndex] = selectedItem;

    this.setState({ product: cloneProduct });
  };

  decreamentHandler = (id) => {
    // find index
    const findIndex = this.state.product.findIndex((index) => index.id === id);
    // clone and update index
    const cloneIndex = { ...this.state.product[findIndex] };

    if (cloneIndex.quantity === 1) {
      const filterProducts = this.state.product.filter(
        (product) => product.id !== id
      );
      this.setState({ product: filterProducts });
    } else {
      // clone state
      const cloneProduct = [...this.state.product];
      // update cloneProduct with cloneIndex
      cloneProduct[findIndex] = cloneIndex;
      cloneIndex.quantity--;
      this.setState({ product: cloneProduct });
    }
  };

  componentDidMount() {
    // console.log("App.js componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  render() {
    return (
      <>
        <div className={styles.header}>
          <NavBar
            totallItem={
              this.state.product.filter((product) => product.quantity > 0)
                .length
            }
          />
        </div>
        <ProductList
          product={this.state.product}
          onChange={this.onChangeHandler}
          onRemove={this.removeHandler}
          onIncrement={this.increamentHandler}
          onDecrement={this.decreamentHandler}
        />
      </>
    );
  }
}

export default Wrapper(App, styles.title);
