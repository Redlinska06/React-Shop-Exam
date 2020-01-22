import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputComponent from "../../components/InputComponent/InputComponent";
import createManufacturer from "../../components/Filter/manufacturer";
import styles from "./Filter.module.css";

function Filter({ value, onChange, onInputClick, onClearClick }) {
  const [manu, setManu] = useState([]);

  useEffect(() => {
    setManu(createManufacturer());
  }, []);

  const handleChange = event => {
    onChange(event.target.value);
  };

  const handleClick = value => {
    onInputClick(value);
    const newManu = [...manu];
    manu.forEach(item =>
      item.name === value ? (item.checked = "checked") : (item.checked = "")
    );
    setManu(newManu);
  };

  const handleClearClick = e => {
    e.preventDefault();
    onClearClick();
    handleClick("all");
  };

  const checkboxes = manu.map((item, index) => (
    <InputComponent
      key={index}
      id={item.name}
      checked={item.checked}
      onClick={handleClick}
    ></InputComponent>
  ));

  return (
    <div className={styles.filter}>
      <div className={styles.filterHeader}>
        <h4>Search</h4>
        <a href="#" className={styles.clear} onClick={handleClearClick}>
          Clear
        </a>
      </div>
      <div>
        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="search..."
        />
      </div>
      <h4>Manufacturer</h4>
      <div>{checkboxes}</div>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onInputClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired
};

export default Filter;
