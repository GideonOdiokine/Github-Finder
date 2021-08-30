import React from "react";

function About() {
  let year = new Date().getFullYear();
  return (
    <div>
      <h1>About This App </h1>
      <p>App to search Github users </p>
      <p>Copyright &copy; {year}</p>
    </div>
  );
}

export default About;
