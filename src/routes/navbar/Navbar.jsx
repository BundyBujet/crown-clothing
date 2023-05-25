import React from "react";
import Logo from "../../assets/87 - crown.svg";
import "./Navbar.scss";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
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
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
