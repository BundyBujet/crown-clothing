import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Style from "./ProductCard.module.scss";
import Button from "../button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemsToCart(product);
  };

  return (
    <div className={Style.productCardContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={Style.footer}>
        <span className={Style.name}>{name}</span>
        <span className={Style.price}>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
