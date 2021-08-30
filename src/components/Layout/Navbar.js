import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Navbar({ title }) {
  const slug = useLocation();
  return (
    <nav className="navbar bg-primary">
      <h2>{title}</h2>
      <ul>
        <li>
          {slug.pathname === "/" ? (
            <Link to="/about">About</Link>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
