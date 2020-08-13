import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not macth.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    } catch (error) {
      console.log("Sign up failed!", error);
    }
    //this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={displayName}
            type="text"
            handleChange={this.handleChange}
            label="username"
            required
          />
          <FormInput
            name="email"
            value={email}
            type="email"
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            value={password}
            type="password"
            handleChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            handleChange={this.handleChange}
            label="confirm password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
