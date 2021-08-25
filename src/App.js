import React from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/user/Users";

const App = () => {
  return (
    <div className="App">
      <Navbar title="Github Finder" />
      <div className="container">
        <Users />
      </div>
    </div>
  );
};

export default App;
