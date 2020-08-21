import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item: { name, imageUrl, quantity, price } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">${price}</div>
      <div className="remove-button">&#10006;</div>
    </div>
  );
};

export default CheckoutItem;
