import ProductList from "./components/ProductList";
import styles from "./components/App.module.css";
import NavBar from "./components/NavBar";
import ProviderProducts from "./components/Provider/ProviderProducts.jsx";

const App = () => {
  return (
    <>
      <ProviderProducts>
        <div className={styles.header}>
          <NavBar />
        </div>
        <ProductList />
      </ProviderProducts>
    </>
  );
};

export default App;
