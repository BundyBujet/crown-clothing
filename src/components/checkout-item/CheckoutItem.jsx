import "./CheckoutItem.style.scss";
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemsFromCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemsToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
