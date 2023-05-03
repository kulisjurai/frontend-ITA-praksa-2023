import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TopbarData } from "./TopbarData";
import { NavbarData } from "./NavbarData";
import { GeneralContext } from "../../context/GeneralContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, setUser } = useContext(GeneralContext);
  const logoutUser = () => {
    setUser("");
    window.location.replace("/login");
  };
  return (
    <div>
      <div className="navbar">
        <div className="logo-div">
          <img src="" alt="" />
          <h2 className="logo">mediaUp</h2>
        </div>

        <div className="right-corner">
          <span className="name"></span>

          <div className="right-corner">
            <span className="name">{user}&nbsp;&nbsp;</span>
            {user && (
              <ul className="nav-menu-items1">
                {TopbarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName} onClick={logoutUser}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="navigation">
        {" "}
        <nav className="nav-menu active nav-menu">
          {
            <ul className="nav-menu-items">
              {NavbarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          }
        </nav>
      </div>
    </div>
  );
}
