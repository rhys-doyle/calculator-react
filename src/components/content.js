import React from "react";
import PropTypes from "prop-types";
import "./content.css";

const Content = props => {
  return (
    <div className="contentBox">
      <div
        className="content"
        value={props.value}
        dangerouslySetInnerHTML={{
          __html: props.value === null ? "&nbsp;" : props.value
        }}
      />
    </div>
  );
};

Content.propTypes = {
  value: PropTypes.string
};

export default Content;
