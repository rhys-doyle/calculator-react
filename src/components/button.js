import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const renderContent = label => {
  switch (label) {
    case "*":
      return "×";
    case "/":
      return "÷";
    default:
      return label;
  }
};

const Button = props => {
  return (
    <button
      className={props.type === "operand" ? "push operand" : "push data"}
      onClick={props.handleClick}
      value={props.label}
    >
      {renderContent(props.label)}
    </button>
  );
};

Button.defaultProps = {
  type: "data"
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default Button;
