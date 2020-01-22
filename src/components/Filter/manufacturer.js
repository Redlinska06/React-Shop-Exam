import ProductsService from "../../services/products.service";

const createManufacturer = () => {
  let products;
  try {
    products = ProductsService.getProducts();
  } catch (error) {
    products = [];
  }

  const manufacturer = products.reduce(
    (accum, current) => {
      let occured = accum.some(object => object.name === current.manufacture);
      if (!occured) {
        accum.push({ name: current.manufacture, checked: "" });
      }
      return accum;
    },
    [{ name: "all", checked: "checked" }]
  );

  return manufacturer;
};

export default createManufacturer;
