import React from "react";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pssword: "",
    };
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
      </div>
    );
  }
}

export default SignUp;
