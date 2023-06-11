import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import Style from "./Checkout.module.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className={Style.checkoutContainer}>
      <div className={Style.checkoutHeader}>
        <div className={Style.headerBlock}>
          <span>Product</span>
        </div>
        <div className={Style.headerBlock}>
          <span>Description</span>
        </div>
        <div className={Style.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={Style.headerBlock}>
          <span>Price</span>
        </div>
        <div className={Style.headerBlock}>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <div className={Style.total}>Total: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
