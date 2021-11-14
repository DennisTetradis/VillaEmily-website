import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const ckeckButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const ckeckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const ckeckButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${ckeckButtonStyle} ${ckeckButtonSize} ${ckeckButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}{" "}
    </button>
  );
};
