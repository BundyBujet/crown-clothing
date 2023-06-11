import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import ProductCard from "../../components/productCard/ProductCard";
import Style from "./Category.module.scss";

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  //return what ever paremeters on the path property as an object
  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <div className={Style.categoryContainer}>
      {/* save guard alway if tour components depend on async data */}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
