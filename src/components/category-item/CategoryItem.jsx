import Style from "./CategoryItem.module.scss";
import { Link } from "react-router-dom";
import React from "react";

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div className={Style.categoryContainer}>
      <div
        className={Style.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Link className={Style.categoryBodyContainer} to={`/shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryItem;
