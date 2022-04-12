import { useState } from "react";
import styles from "./Search.module.css";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search ..."
        onChange={changeHandler}
        value={value}
        className={styles.searchBar}
      />
    </div>
  );
};

export default SearchBar;
