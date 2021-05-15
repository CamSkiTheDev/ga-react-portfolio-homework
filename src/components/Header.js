import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>My Portfolio Page</h1>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/projects">
          <span>Projects</span>
        </Link>
      </nav>
    </header>
  );
}
