import React from "react";
import Container from "../../components/Container/Container";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          Shop © 2020 <br /> Designed by Andrzej
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
