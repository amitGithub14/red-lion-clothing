import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img
          className="logo"
          src={require("../../RedLion.png")}
          height="80px"
          alt="logo"
        />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <>
            <div className="option">{currentUser.displayName}</div>
            <div className="sign-out" onClick={() => auth.signOut()}>
              LOG OUT
            </div>
          </>
        ) : (
          <Link className="option" to="/signin">
            <CustomButton classes="sign-btn">LOG IN</CustomButton>
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
