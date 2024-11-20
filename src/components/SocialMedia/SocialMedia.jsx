import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="social_media">
      <Link to={""} className="social_icon">
        <FaFacebookF className="icon" />
      </Link>
      <Link to={""} className="social_icon">
        <FaXTwitter className="icon" />
      </Link>
      <Link to={""} className="social_icon">
        <FaGoogle className="icon" />
      </Link>
      <Link to={""} className="social_icon">
        <FaLinkedinIn className="icon" />
      </Link>
    </div>
  );
};

export default SocialMedia;
