import React, { useState } from "react";

function Search({ searchUser }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(text);
    setText("");
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
    </div>
  );
}

export default Search;
