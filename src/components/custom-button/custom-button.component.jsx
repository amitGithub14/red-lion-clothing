import React from "react";
import "./custom-button.styles.scss";

const customButton = ({ children, classes, isGoogleSignin, ...otherProps }) => {
  return (
    <button
      className={
        classes
          ? `${classes}`
          : `${isGoogleSignin ? isGoogleSignin : null} custom-button`
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default customButton;
