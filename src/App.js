import ProductList from "./components/ProductList";
import styles from "./components/App.module.css";
import NavBar from "./components/NavBar";
import ProviderProducts from "./components/Provider/ProviderProducts.jsx";
import Filter from "./components/Filter/Filter";
import SearchBar from "./common/Search/Search";

const App = () => {
  return (
    <>
      <ProviderProducts>
        <div className={styles.header}>
          <NavBar />
        </div>
        <SearchBar />
        <Filter />
        <ProductList />
      </ProviderProducts>
    </>
  );
};

export default App;
