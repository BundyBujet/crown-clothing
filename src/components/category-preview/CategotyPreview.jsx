import Style from "./CategoryPreview.module.scss";
import ProductCard from "../productCard/ProductCard";
const CategotyPreview = ({ title, products }) => {
  return (
    <div className={Style.categoryPreviewContainer}>
      <h2>
        <span className={Style.title}>{title.toUpperCase()}</span>
      </h2>
      <div className={Style.preview}>
        {products
          .filter((product, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategotyPreview;
