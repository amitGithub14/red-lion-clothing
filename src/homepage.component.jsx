import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header">Menu</div>
      <div className="collection-container">
        <div className="item-container">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="item-container">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="item-container">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="item-container">
          <div className="content">
            <h1 className="title">MEN</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="item-container">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default HomePage;
