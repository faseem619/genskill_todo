import React, { useRef } from "react";
import "./CSS/navbar.css";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcMenu } from "react-icons/fc";
function Navbar() {
  const navbar = useRef(null);
  const handleClick = () => {
    navbar.current.classList.toggle("show");
  };
  return (
    <>
      <nav>
        <h1>
          <FcTodoList className="nav-icons" />
          MY TODO APP
        </h1>
        <h2>
          Log Out <RiLogoutBoxRLine className="nav-icons" />
        </h2>
        <h2>
          About <FcAbout className="nav-icons " />
        </h2>
        <FcMenu className="nav-icons menu-btn" onClick={handleClick} />
      </nav>
      <div className="nav-toggle" ref={navbar}>
        <h2 className="nav-list-item">Log Out</h2>
        <h2 className="nav-list-item">About</h2>
      </div>
    </>
  );
}

export default Navbar;
