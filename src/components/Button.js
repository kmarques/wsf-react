import React from "react";
import { Button as MButton } from "@material-ui/core";

function Button({ img, title = "red", onClick, ...rest }) {
  console.log(rest);
  return (
    <div>
      <MButton
        onClick={onClick}
        startIcon={
          img && (
            <img style={{ height: 24, width: 24 }} src={img} alt="button" />
          )
        }
        {...rest}
      >
        {title}
      </MButton>
    </div>
  );
}

export default Button;
