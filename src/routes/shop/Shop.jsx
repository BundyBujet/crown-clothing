import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import ProductCard from "../../components/productCard/ProductCard";
import "./Shop.style.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
