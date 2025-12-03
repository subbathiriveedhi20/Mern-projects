import React, { useState } from "react";

function Name() {
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");

  const updateName = (e) => {
    setUserName(e.target.value);
  };

  const validateName = (e) => {
    if (username === "" || username === null) {
      setError("Name should not be empty");
    } else if (username.length < 4) {
      setError("userName must be more than 4 characters");
    } else if (username.length > 8) {
      setError("userName should be 4 to 8 characters");
    } else {
        setError("User creation successfully")
    }
  };

  return (
    <div>
      <label htmlFor="username">Username</label>

      <input
        type="text"
        name="username"
        value={username}
        onChange={updateName}
      />
      <span style={{ color: "red" }}>{error}</span>

      <button onClick={validateName}>validateName</button>
    </div>
  );
}

export default Name;
