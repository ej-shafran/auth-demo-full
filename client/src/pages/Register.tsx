import React, { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    //TODO: send a registration request here
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">שם משתמש</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label htmlFor="password">סיסמא</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <br />

      <input type="submit" />

      <br />

      <Link to="/login">לכניסה</Link>
    </form>
  );
};
