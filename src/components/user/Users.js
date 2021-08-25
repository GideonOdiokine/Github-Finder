import React, { useState } from "react";
import UserItem from "./UserItem";

function Users() {
  const [users, setUsers] = useState([
    {
      login: "mojombo",
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      url: "https://api.github.com/users/mojombo",
      html_url: "https://github.com/mojombo",
    },
    {
      login: "defunkt",
      id: 2,
      avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      html_url: "https://api.github.com/users/defunkt",
    },
    {
      id: 3,
      login: "Gideon Odiokine",
      avatar_url: "https://avatars.githubusercontent.com/u/61180360?v=4",
      html_url: "https://github.com/gideonodiokine",
    },
  ]);

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGarp: "1rem",
};

export default Users;
