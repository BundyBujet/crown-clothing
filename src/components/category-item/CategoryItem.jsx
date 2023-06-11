import Style from "./CategoryItem.module.scss";

import React from "react";

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div className={Style.categoryContainer}>
      <div
        className={Style.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={Style.categoryBodyContainer}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
