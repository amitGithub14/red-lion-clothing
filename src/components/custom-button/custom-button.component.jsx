import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, ...otherProps }) => {
  return (
    <button
      className={
        otherProps.classes
          ? `${otherProps.classes} custom-button`
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
