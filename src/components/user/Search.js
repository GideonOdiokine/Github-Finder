import React, { useState } from "react";

function Search({ searchUser, clearUser, users, showAlert }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter something", "light");
    } else {
      searchUser(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
          placeholder="Search Users...."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUser}>
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
