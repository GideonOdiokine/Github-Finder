import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/user/Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await axios.get("https://api.github.com/users");
      setUsers(res.data);
    };
    fetchUser();

    setLoading(false);
  }, []);

  return (
    <div className="App">
      <Navbar title="Github Finder" />
      <div className="container">
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
};

export default App;
