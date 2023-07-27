import React from "react";
import Nav from "../nav/Nav";
import "./header.scss";
import logo from "../../../public/images/shared/logo.svg";
import menu from "../../../public/images/shared/icon-hamburger.svg";
const Header = () => {
  return (
    <header className="header">
      {/* <Nav/> */}
      <div className='header__up'>
        <figure className='logo'>
          <img src={logo} alt="" />
        </figure>
        <figure className='menu'>
        <img src={menu} alt="" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
