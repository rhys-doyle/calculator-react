import React from "react";
import Content from "./content";
import PropTypes from "prop-types";

const formattedEq = eq => {
  if (eq === null) {
    return eq;
  }
  const spacedEq = eq.split("").join(" ");
  const signAdjustedEq = spacedEq.replace(/\*|\//g, match => {
    return match === "*" ? "×" : "÷";
  });
  const wrappedEq = signAdjustedEq.replace(
    /\+|÷|×|-/g,
    match => `<span>${match}</span>`
  );
  return wrappedEq;
};

const formattedResult = result => {
  if (result === null) {
    return result;
  }
  return result.split("").join(" ");
};

const Screen = props => {
  return (
    <div className="screen">
      <Content value={formattedEq(props.eq)} />
      <Content value={formattedResult(props.result)} />
    </div>
  );
};

Screen.propTypes = {
  eq: PropTypes.string,
  result: PropTypes.string
};

export default Screen;
