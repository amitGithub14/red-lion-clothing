import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.reselectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CustomButton from "../custom-button/custom-button.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img
          className="logo"
          src={require("../../assets/RedLion.png")}
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
        <CartIcon className="option" />
        {hidden ? null : <CartDropdown />}
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
