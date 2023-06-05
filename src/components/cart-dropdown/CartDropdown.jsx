import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartDropdown.styles.scss";
import CartItem from "../cartItem/CartItem";
import Button from "../button/Button";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigation = useNavigate();

  const navigationHandler = () => {
    navigation("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={navigationHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
