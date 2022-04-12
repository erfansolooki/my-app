import Product from "../Product";
import styles from "./Filter.module.css";
import { useProuctAction } from "../Provider/ProviderProducts";
import { useState } from "react";
import Select from "react-select";
import SelectComponent from "../../common/Select/Select";

const Filter = () => {
  const dispacth = useProuctAction();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const changeHandler = (selectedOption) => {
    dispacth({
      type: "filter",
      selectedOption,
    });
    // rerender sort.method() when user use both filter and sort
    dispacth({
      type: "sort",
      sortOptions,
    });
    setValue(selectedOption);
  };

  const sortHandler = (sortOptions) => {
    dispacth({
      type: "sort",
      sortOptions,
    });
    setSort(sortOptions);
  };

  const options = [
    { value: "", label: "All" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];

  const sortOptions = [
    { value: "highest", label: "hight to low price" },
    { value: "lowest", label: "low to hight price" },
  ];

  return (
    <div className={styles.filterProducts}>
      <p className={styles.firstP}>filterProducts based on :</p>
      <div className={styles.selectedOption}>
        <SelectComponent
          title="order by size"
          defaultValue={value}
          onChange={changeHandler}
          options={options}
          className={styles.select}
        />
      </div>
      <SelectComponent
        title="order by price"
        defaultValue={sort}
        onChange={sortHandler}
        options={sortOptions}
        className={styles.select}
      />
    </div>
  );
};

export default Filter;
