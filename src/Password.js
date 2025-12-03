import React, { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateCPassword = (e) => {
    setCPassword(e.target.value);
  };

  const validatePassword = (e) => {
    const regExpSpecialChars =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "" || password === null) {
      setError("Password should not be empty");
    } else if (password.length < 4) {
      setError("Password should be more than 4 characters");
    } else if (!regExpSpecialChars.test(password)) {
      setError(
        "Password should be atleast 1 digit, 2 special chars, 1 lower and upper letter"
      );
    } else if (password !== cpassword) {
      setError("Password should match");
    } else {
      setError("Strong password");
    }
  };

  return (
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={updatePassword}
      />
      <span style={{ color: "red" }}>{error}</span>

      <label htmlFor="password">ConfirmPassword</label>
      <input
        type="confirmPassword"
        name="confirmPassword"
        value={cpassword}
        onChange={updateCPassword}
      />
      <span style={{ color: "red" }}>{error}</span>
      <button onClick={validatePassword}>validatePassword</button>
    </div>
  );
}

export default Password;
