import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="intro">
          <h1>RED LION</h1>
          <p>
            Red Lion is an e-commerce website for demonstration purpose only.
            It's purpose is to show case the skills in Reactjs (Full Stack
            Development)
          </p>
        </div>
        <div className="list-map">
          <Link className="list" to="/shop">
            SHOP
          </Link>
          <Link className="list" to="/">
            CONTACT
          </Link>
        </div>
        <div className="newsletter">
          <h1>Newsletter</h1>
          <h3>Subscribe to our newsletter.</h3>
          <form className="newsletter-form">
            <input
              className="newsletter-input"
              type="text"
              placeholder="Your email"
              name="email"
            />
            <button className="newsletter-btn" type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Red Lion, 2020. Developed by Amit Rathore
      </div>
    </div>
  );
};

export default Footer;
