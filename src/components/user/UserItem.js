import React from "react";

function UserItem({ user }) {
  const { login, avatar_url, html_url } = user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="avatar"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a
          target="__blank"
          href={html_url}
          className="btn btn-dark btn-sm my-1"
        >
          More
        </a>
      </div>
    </div>
  );
}

export default UserItem;
