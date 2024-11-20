import React from "react";
import Panel from "./Panel";
import { useDispatch } from "react-redux";
import ImgLog from "../../assets/images/log.svg";
import ImgRegister from "../../assets/images/register.svg";

const PanelsContainer = ({ onSignUpClick, onSignInClick }) => {
  return (
    <div className="panels_container">
      <Panel
        title="New here ?"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!"
        buttonLabel="Sign up"
        imgSrc={ImgLog}
        onClick={onSignUpClick}
        className="left_panel"
      />
      <Panel
        title="One of us ?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti."
        buttonLabel="Sign in"
        imgSrc={ImgRegister}
        onClick={onSignInClick}
        className="right_panel"
      />
    </div>
  );
};

export default PanelsContainer;
