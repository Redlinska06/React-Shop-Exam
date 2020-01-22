import React, { useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import HeaderBig from "../../components/HeaderBig/HeaderBig";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import ProductsList from "../../components/ProductsList/ProductsList";

import ProductsService from "../../services/products.service";

function HomePage() {
  const [products, setProducts] = useState([]);

  const filterProducts = (productsArray, category) => {
    return productsArray
      .filter(product => product.category === category)
      .filter(product => product.featured);
  };

  useEffect(() => {
    try {
      setProducts(ProductsService.getProducts());
    } catch (error) {
      setProducts([]);
    }
  }, []);

  const desktops = filterProducts(products, "desktop");
  const tablets = filterProducts(products, "tablet");

  return (
    <Container>
      <HeaderBig text="Welcome to our store"></HeaderBig>
      <HeaderSmall text="Desktops"></HeaderSmall>
      <ProductsList products={desktops}></ProductsList>
      <HeaderSmall text="Tablets"></HeaderSmall>
      <ProductsList products={tablets}></ProductsList>
    </Container>
  );
}

export default HomePage;
