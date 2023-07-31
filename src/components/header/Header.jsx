import React, { useContext, useEffect, useState } from "react";
import Nav from "../nav/Nav";
import "./header.scss";
import "../nav/nav.scss"
import HeaderTab from "../headerTab/HeaderTab";
import { useMediaQuery } from "react-responsive";
import HeaderDek from "../headerDek/HeaderDek";
import { AppContext } from "../../routes/Router";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1099 });
  const { inNavMobile , setInNavMobile } = useContext(AppContext)

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setIsMenuOpen(false); // Cerrar el menú en vista mobile
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setInNavMobile(!inNavMobile);
  };

  return (
    <>
     {isMobile && ( // vista movil
        <header className="header">
          {/* <Nav/> */}
          <div className="header__up">
            <figure className="logo">
              <img src="/images/shared/logo.svg" alt="logo image" />
            </figure>
            <figure className="hamburger" onClick={handleMenuToggle}>
              {isMenuOpen ? (
                <img className="close" src="/images/shared/icon-close.svg" alt="close icon"/>
              ) : (
                <img className="menu" src="/images/shared/icon-hamburger.svg" alt="menu icon"/>
              )}
            </figure>
          </div>
          {isMenuOpen && <Nav className="nav" handleMenuToggle={handleMenuToggle} />}
        </header>
      )}
      {isTablet && ( // vista tablet
        <header>
           <HeaderTab />
        </header>
      )}
      {!isMobile && !isTablet && ( // vista de escritorio
        <header>
          <HeaderDek/>
        </header>
      )}
    </>
  );
};

export default Header;
