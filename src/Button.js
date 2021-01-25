import React from "react";

function Button(props) {
  return (
    <button
      onClick={function () {
        alert(props.title);
      }}
    >
      {props.title}
    </button>
  );
}

export default Button;
