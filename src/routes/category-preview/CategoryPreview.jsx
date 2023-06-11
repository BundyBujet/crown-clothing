import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import CategotyPreview from "../../components/category-preview/CategotyPreview";

const CategoryPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);

  const titles = Object.keys(categoryMap);
  return (
    <>
      {titles.map((title) => {
        const products = categoryMap[title];
        return (
          <CategotyPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoryPreview;
