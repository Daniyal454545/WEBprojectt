import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import "./header.css";

export const Header = () => {
  return (
    <div id="header" className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
           Store
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
