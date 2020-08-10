import "./menu-item.styles.scss";
import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, id, imageUrl, size, history, linkUrl, match }) => {
  console.log(match.url);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
