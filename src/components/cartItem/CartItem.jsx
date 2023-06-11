import Style from "./CartItem.module.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className={Style.cartItemContainer}>
      <img src={imageUrl} alt={name} />
      <div className={Style.itemDetails}>
        <span className={Style.name}>{name}</span>
        <span className={Style.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
