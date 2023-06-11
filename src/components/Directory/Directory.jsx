import React from "react";
import Style from "./Directort.module.scss";
import CategoryItem from "../category-item/CategoryItem";
import { Catagories } from "../categories/categories";

const Directory = () => {
  return (
    <div className={Style.categoriesContainer}>
      {Catagories.map(({ title, id, imageUrl }) => (
        <CategoryItem title={title} key={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
