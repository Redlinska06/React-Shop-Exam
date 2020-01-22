import React from "react";
import PropTypes from "prop-types";
import styles from "./HeaderSmall.module.css";

function HeaderSmall({ text }) {
  return <h2 className={styles.headerSmall}>{text}</h2>;
}

HeaderSmall.propTypes = {
  text: PropTypes.string.isRequired
};

export default HeaderSmall;
