import React from "react";

function Button({
  img,
  title = "red",
  onClick,
  color = "green",
  titleColor = "white",
}) {
  return (
    <div>
      <button
        style={{ backgroundColor: color, color: titleColor }}
        onClick={onClick}
      >
        {img && <img src={img} alt="button" />}
        {title}
      </button>
    </div>
  );
}

export default Button;
