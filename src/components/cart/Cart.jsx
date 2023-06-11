import Style from "./Cart.module.scss";
import CartIcon from "../../assets/115 - shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  const cartDropdownHandler = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div className={Style.cartIconContainer} onClick={cartDropdownHandler}>
      <img src={CartIcon} className={Style.shoppingIcon} />
      <span className={Style.itemCount}>{cartCount}</span>
    </div>
  );
};

export default Cart;
