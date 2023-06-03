import { useContext } from "react";
import Logo from "../../assets/87 - crown.svg";
import "./Navbar.scss";
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
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
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
