import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/user/Users";
import axios from "axios";
import Search from "./components/user/Search";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchUser = async (user) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar title="Github Finder" />
      <div className="container">
        <Search searchUser={searchUser} />
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
};

export default App;
//   useEffect(() => {
//     const fetchUser = async () => {
//       setLoading(true);
//       const res = await axios.get(
//         `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//       );
//       setUsers(res.data);
//     };
//     fetchUser();

//     setLoading(false);
//   }, []);
