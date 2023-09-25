import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <hr />
        <li>
          <Link to={"/cart"}>cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
