import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import logo from "../logo.svg";

export default function HomeView() {
  const buttons = [
    { title: "bonjour", variant: "contained", color: "red", img: logo },
    {
      title: "bonsoir",
      variant: "contained",
      color: "primary",
      onClick: () => alert("bonsoir"),
    },
    { title: "bonsocdsqfqsir", variant: "contained", color: "secondary" },
    { title: "light", variant: "contained", color: "primary", toto: "text" },
    { title: "dark", variant: "contained", color: "inherit", toto: "text" },
  ];

  return (
    <header className="App-header">
      {buttons.map((button, index) => (
        <Button
          key={index}
          title={button.title}
          color={button.color}
          img={button.img}
          onClick={button.onClick}
          variant={button.variant}
          toto={button.toto}
        />
      ))}
      <Button variant="text" component={Link} to="/list" title={"Go to List"} />
    </header>
  );
}
