import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#login">Login</a>
      <a href="#dashboard">Dashboard</a>
    </div>
  );
};

export default Navbar;
