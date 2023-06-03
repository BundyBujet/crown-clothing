import "./CartDropdown.styles.scss";
import Button from "../button/Button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go To CheckOut</Button>
    </div>
  );
};

export default CartDropdown;