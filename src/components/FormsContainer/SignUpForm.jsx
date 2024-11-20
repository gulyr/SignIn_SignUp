import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FaUser } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";

const SignUpForm = () => {
  return (
    <form action="#" className="sign_up_form">
      <h2 className="title">Sign up</h2>
      <div className="input_field">
        <FaUser className="icon" />
        <input type="text" placeholder="Username" />
      </div>
      <div className="input_field">
        <FaEnvelope className="icon" />
        <input type="email" placeholder="Email" />
      </div>
      <div className="input_field">
        <IoLockClosed className="icon" />
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social_text">Or Sign up with social platforms</p>
      <SocialMedia />
    </form>
  );
};

export default SignUpForm;
