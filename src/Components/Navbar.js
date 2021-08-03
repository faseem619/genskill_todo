import React from "react";
import "./CSS/navbar.css";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
function Navbar() {
  return (
    <nav>
      <h1>
        <FcTodoList className="nav-icons" />
        MY TODO APP
      </h1>
      <h2>
        Log Out <RiLogoutBoxRLine className="nav-icons" />
      </h2>
      <h2>
        About <FcAbout className="nav-icons" />
      </h2>
    </nav>
  );
}

export default Navbar;
