import React from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";

function Users({ users, loading }) {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGarp: "1rem",
};

export default Users;
