import React from "react";
import "./signpage.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignPage = () => {
  return (
    <div className="sign-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignPage;
