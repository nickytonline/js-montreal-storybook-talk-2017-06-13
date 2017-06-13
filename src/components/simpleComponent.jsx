import React from "react";

const defaultStyle = {
  width: "20rem",
  height: "10rem",
  fontSize: "2rem",
  cursor: "pointer",
  color: "#000000"
};

const disabledStyle = Object.assign({}, defaultStyle, {
  color: "#ff0000",
  backgroundColor: "pink",
  cursor: "not-allowed"
});

const SimpleComponent = props => {
  if (props.disabled) {
    return (
      <button style={props.style || disabledStyle} disabled>
        {props.children}
      </button>
    );
  } else {
    return (
      <button onClick={props.onClick} style={props.style || defaultStyle}>
        {props.children}
      </button>
    );
  }
};

export default SimpleComponent;
