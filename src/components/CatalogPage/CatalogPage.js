import React, { useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import HeaderBig from "../../components/HeaderBig/HeaderBig";
import Filter from "../../components/Filter/Filter";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductsService from "../../services/products.service";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [word, setWord] = useState("");
  const [manufacturer, setManufacturer] = useState("all");

  useEffect(() => {
    try {
      setProducts(ProductsService.getProducts());
    } catch (error) {
      setProducts([]);
    }

    return () => {
      setProducts([]);
      setWord("");
      setManufacturer("all");
    };
  }, []);

  const filterProducts = (productsArray, name, fabricant) => {
    if (fabricant === "all" && !name) {
      return productsArray;
    }
    let productsToShow;
    if (name) {
      productsToShow = productsArray.filter(product =>
        product.name.toUpperCase().includes(name.toUpperCase())
      );
    }
    if (fabricant !== "all" && !name) {
      productsToShow = productsArray.filter(
        product => product.manufacture.toUpperCase() === fabricant.toUpperCase()
      );
    } else if (fabricant !== "all" && name) {
      productsToShow = productsToShow.filter(
        product => product.manufacture.toUpperCase() === fabricant.toUpperCase()
      );
    }
    return productsToShow;
  };

  const filteredProducts = filterProducts(products, word, manufacturer);

  const handleClear = () => {
    setWord("");
  };

  return (
    <Container>
      <HeaderBig text="Catalog"></HeaderBig>
      <div className={styles.catalog}>
        <div className={styles.columnLeft}>
          <Filter
            value={word}
            onChange={value => setWord(value)}
            onInputClick={value => setManufacturer(value)}
            onClearClick={handleClear}
          ></Filter>
        </div>
        <div className={styles.columnRight}>
          <ProductsList products={filteredProducts}></ProductsList>
        </div>
      </div>
    </Container>
  );
}

export default CatalogPage;
