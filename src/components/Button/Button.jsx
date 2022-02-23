import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div className={`button ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
