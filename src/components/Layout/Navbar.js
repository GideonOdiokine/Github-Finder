import React from "react";

function Navbar({ title }) {
  return (
    <nav className="navbar bg-primary">
      <h2>{title}</h2>
    </nav>
  );
}

export default Navbar;
