import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/user/Users";
import axios from "axios";
import Search from "./components/user/Search";
import Alert from "./components/Layout/Alert";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUser = async (user) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };
  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div className="App">
      <Navbar title="Github Finder" />
      <div className="container">
        <Alert alert={alert} />
        <Search
          searchUser={searchUser}
          clearUser={clearUser}
          users={users}
          showAlert={showAlert}
        />
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
