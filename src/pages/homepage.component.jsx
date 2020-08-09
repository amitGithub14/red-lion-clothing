import React from "react";
import "./homepage.styles.scss";
import Directory from "../components/directory/directory.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header">Menu</div>
      <Directory />
      <div className="footer">footer</div>
    </div>
  );
};

export default HomePage;
