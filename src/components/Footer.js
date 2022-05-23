import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
import "boxicons";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="subscription-heading">
          lorem eposeop lorem eposeoplorem eposeoplorem eposeop
        </p>
        <p className="footer-subscription-text">
          lorem eposom lorem eposom lorem eposom
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline"> Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer link wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
          </div>

          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
          </div>
        </div>

        <div className="footer link wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
          </div>

          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
            <Link to="/">lorem oposem </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-log">
            <Link to="/" className="social-logo">
              <box-icon type="logo" name="deezer"></box-icon>
            </Link>
          </div>
          <small className="website-rights">lorem</small>
          <div className="social-icons">
            <Link to="/" target="_blank" className="social-icon-link">
              <box-icon type="logo" name="instagram"></box-icon>
            </Link>

            <Link to="/" target="_blank" className="social-icon-link">
              <box-icon name="telegram" type="logo"></box-icon>
            </Link>

            <Link to="/" target="_blank" className="social-icon-link">
              <box-icon name="facebook-circle" type="logo"></box-icon>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
