import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

const routes = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Messages",
    to: "/messages",
  },
];

const Nav = () => {
  return (
    <Container>
      <div className="inner">
        <img
          alt="logo-financr"
          src={require("../../assets/icons/logo-dark.svg")}
        />

        <div></div>

        <div>
          <p>Kevin Hart</p>
          <img
            src={require("../../assets/icons/arrow-down.svg")}
            alt="financr"
          />
        </div>
      </div>
    </Container>
  );
};

export default Nav;
