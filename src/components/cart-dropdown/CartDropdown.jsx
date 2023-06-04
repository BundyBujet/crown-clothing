import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartDropdown.styles.scss";
import CartItem from "../cartItem/CartItem";
import Button from "../button/Button";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go To CheckOut</Button>
    </div>
  );
};

export default CartDropdown;
