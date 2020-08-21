import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, addItem, removeItemFromCart, removeItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </div>
      <div className="price">${price}</div>
      <div className="remove-button" onClick={() => removeItemFromCart(item)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
