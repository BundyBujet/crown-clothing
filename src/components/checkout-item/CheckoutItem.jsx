import Style from "./CheckoutItem.module.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemsToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemFromCartHandler = () => {
    clearItemFromCart(cartItem);
  };

  const addItemsToCartHandler = () => {
    addItemsToCart(cartItem);
  };
  const removeItemsFromCartHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div className={Style.checkoutItemContainer}>
      <div className={Style.imageContainer}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={Style.name}>{name}</span>
      <span className={Style.quantity}>
        <div className={Style.arrow} onClick={removeItemsFromCartHandler}>
          &#10094;
        </div>
        <span className={Style.value}>{quantity}</span>
        <div className={Style.arrow} onClick={addItemsToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className={Style.price}>{price}</span>
      <div className={Style.removeButton} onClick={clearItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
