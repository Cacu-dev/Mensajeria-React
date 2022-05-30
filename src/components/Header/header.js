import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/nav";
import "./header.module.css";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>BloG</h1>
      </Link>
      <span>
        <Nav />
      </span>
    </header>
  );
};

export default Header;
