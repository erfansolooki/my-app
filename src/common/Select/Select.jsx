import styles from "./select.module.css";
import Select from "react-select";

const SelectComponent = ({ sort, onchange, options, title }) => {
  return (
    <div className={styles.selectedOption}>
      <span>{title}</span>
      <Select
        defaultValue={sort}
        onChange={onchange}
        options={options}
        className={styles.select}
      />
    </div>
  );
};

export default SelectComponent;
