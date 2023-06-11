import { useContext } from "react";
import Logo from "../../assets/87 - crown.svg";
import Style from "./Navbar.module.scss";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/UserConttext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../context/CartContext";
import Cart from "../../components/cart/Cart";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser(); // return undefiend
  };

  return (
    <>
      <div className={Style.navigation}>
        <Link className={Style.logoContainer} to="/">
          <img src={Logo} alt="logo" className="{Style.logo}" />
        </Link>
        <div className={Style.navLinksContainer}>
          <Link className={Style.navLink} to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className={Style.navLink} onClick={signOutHandler}>
              Sign out
            </span>
          ) : (
            <Link className={Style.navLink} to="/auth">
              Sign In
            </Link>
          )}
          <Cart />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
