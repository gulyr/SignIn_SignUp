import React from "react";

const Panel = ({ title, text, buttonLabel, imgSrc, onClick, className }) => {
  return (
    <div className={`panel ${className}`}>
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="btn transparent" onClick={onClick}>
          {buttonLabel}
        </button>
      </div>
      <img src={imgSrc} className="image" alt={title} />
    </div>
  );
};

export default Panel;
