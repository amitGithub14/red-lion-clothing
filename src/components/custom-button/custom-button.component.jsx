import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      className={
        otherProps.classes
          ? `${otherProps.classes}`
          : `${
              otherProps.isgooglesignin ? otherProps.isgooglesignin : null
            } custom-button`
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
