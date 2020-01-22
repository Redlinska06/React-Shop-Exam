import React from "react";
import PropTypes from "prop-types";
import styles from "./HeaderBig.module.css";

function HeaderBig({ text }) {
  return <h1 className={styles.headerBig}>{text}</h1>;
}

HeaderBig.propTypes = {
  text: PropTypes.string.isRequired
};

export default HeaderBig;
