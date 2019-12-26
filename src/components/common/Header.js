import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            WebSiteName
          </a>
        </div>
        <ul className="nav navbar-nav">
          <NavLink activeStyle={activeStyle} exact to="/">
            Home
          </NavLink>{" "}
          <NavLink activeStyle={activeStyle} to="/about">
            About
          </NavLink>{" "}
          <NavLink activeStyle={activeStyle} to="/courses">
            Courses
          </NavLink>
          <li>
            <a href="#">Page 3</a>
          </li>
        </ul>
      </div>
    </nav>
    // <nav>
    //   <NavLink activeStyle={activeStyle} exact to="/">
    //     Home
    //   </NavLink>{" "}
    //   |
    //   <NavLink activeStyle={activeStyle} to="/about">
    //     About
    //   </NavLink>{" "}
    //   |
    //   <NavLink activeStyle={activeStyle} to="/courses">
    //     Courses
    //   </NavLink>
    // </nav>
  );
}

export default Header;
