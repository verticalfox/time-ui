import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faDashboard,
  faClock,
  faUser,
  faSheetPlastic,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";
const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h2 >Foxy Clock </h2>
       
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
      <p></p>
        {/* <NavItem >
          <NavLink tag={Link} to={'/login'}>
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Login test
          </NavLink>
        </NavItem> */}
        {/* <SubMenu title="Home" icon={faHome} items={submenus[0]}/> */}
        <NavItem >
          <NavLink tag={Link} to={'/tracker'}>
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            Tracker
          </NavLink>
        </NavItem>
      
        <NavItem >
          <NavLink tag={Link} to={'/dashboard'}>
            <FontAwesomeIcon icon={faDashboard} className="mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
      

        {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
        <NavItem>
          <NavLink tag={Link} to={"/project"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Project
          </NavLink>
        </NavItem>
        {/* <NavItem >
          <NavLink tag={Link} to={'/about'}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink tag={Link} to={"/users"}>
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/report"}>
            <FontAwesomeIcon icon={faSheetPlastic} className="mr-2" />
            Report
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    // {
    //   title: "Tracker",
    //   target: "tracker",
    // },
  //   {
  //     title: "Home 2",
  //     target: "Home-2",
  //   },
  //   {
  //     title: "Home 3",
  //     target: "Home-3",
  //   },
  // ],
  // [
  //   {
  //     title: "Page 1",
  //     target: "Page-1",
  //   },
  //   {
  //     title: "Page 2",
  //     target: "Page-2",
  //   },
  ],
];

export default SideBar;
