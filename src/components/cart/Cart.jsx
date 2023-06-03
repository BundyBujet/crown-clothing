import "./Cart.styles.scss";
import CartIcon from "../../assets/115 - shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const cartDropdownHandler = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div className="cart-icon-container" onClick={cartDropdownHandler}>
      <img src={CartIcon} className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default Cart;
