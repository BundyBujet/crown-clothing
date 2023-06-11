import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../category-preview/CategoryPreview";
import Category from "../category/Category";
import Style from "./Shop.module.scss";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
