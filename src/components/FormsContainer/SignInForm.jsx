import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FaUser } from "react-icons/fa6";
import { IoLockClosed } from "react-icons/io5";

const SignInForm = () => {
  return (
    <form action="#" className="sign_in_form">
      <h2 className="title">Sign in</h2>
      <div className="input_field">
        <FaUser className="icon" />
        <input type="text" placeholder="Username" />
      </div>
      <div className="input_field">
        <IoLockClosed className="icon" />
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" className="btn" />
      <p className="social_text">Or Sign in with social platforms</p>
      <SocialMedia />
    </form>
  );
};

export default SignInForm;
