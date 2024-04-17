export default function Button(props) {
  const {
    title,
    onClick,
    customStyle,
    variant,
    component = "button",
    children,
    ...rest
  } = props;
  let finalTitle = title;
  let Component = component;

  const style = {
    backgroundColor: "red",
    border: "2px dashed yellow",
    marginLeft: "5px",
    marginTop: "5px",
  };

  switch (variant) {
    case "squared":
      style.borderRadius = "0px";
      break;
    case "round":
      style.borderRadius = "50%";
      style.width = "50px";
      style.height = "50px";
      finalTitle = finalTitle.slice(0, 1);
      break;
    case "text":
      Component = "span";
      style.cursor = "pointer";
      break;
  }

  const finalStyle = Object.assign({}, style, customStyle);

  //if (component === "button") {
  //  return (
  //    <button style={finalStyle} onClick={onClick}>
  //      {title}
  //    </button>
  //  );
  //} else {
  //  return (
  //    <span style={finalStyle} onClick={onClick}>
  //      {title}
  //    </span>
  //  );
  //}
  return (
    <Component style={finalStyle} onClick={onClick} {...rest}>
      {title ?? children}
    </Component>
  );
}
