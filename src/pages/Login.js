import React from "react";
import "./../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
