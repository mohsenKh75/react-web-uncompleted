import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="nav-bar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            KlassiKa <box-icon type="logo" name="deezer"></box-icon>
          </Link>
          <div onClick={handleClick} className="menu-icon">
            <i
              className={
                click ? "bx bx-plus bx-rotate-90" : "bx bx-menu bx-rotate-45"
              }
            ></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {" "}
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Sign-up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Anmelden</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
