import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Style from "./CartDropdown.module.scss";
import CartItem from "../cartItem/CartItem";
import Button from "../button/Button";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigation = useNavigate();

  const navigationHandler = () => {
    navigation("/checkout");
  };

  return (
    <div className={Style.cartDropdownContainer}>
      <div className={Style.cartItems}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={navigationHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
