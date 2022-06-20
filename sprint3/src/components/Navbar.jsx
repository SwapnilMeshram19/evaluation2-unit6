import React from "react";

const Navbar = ({authenticate}) => {
  console.log(authenticate)


  return <div className="navbar">
        <h3>Home</h3>
        <h3>Cart</h3>
        <h3>Login</h3>
    </div>;
};

export default Navbar;
