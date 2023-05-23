import React from "react";
import "./Directort.scss";
import CategoryItem from "../category-item/CategoryItem";
import { Catagories } from "../categories/categories";

const Directory = () => {
  return (
    <div className="categories-container">
      {Catagories.map(({ title, id, imageUrl }) => (
        <CategoryItem title={title} key={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
