import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faClock,
  faUser,
  faSheetPlastic,
  faSignOut,
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

      {/* view for normal user */}
        <NavItem >
          <NavLink tag={Link} to={'/tracker'}>
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            Tracker
          </NavLink>
        </NavItem>




    {/* view for ADMIN */}
        {/* <SubMenu title="Project" icon={faImage} items={submenus[0]}/>
        <SubMenu title="Users" icon={faUser} items={submenus[1]}/> */}
        <NavItem>
          <NavLink tag={Link} to={"/projects"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Projects
          </NavLink>
        </NavItem> <NavItem>
          <NavLink tag={Link} to={"/users"}>
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/reports"}>
            <FontAwesomeIcon icon={faSheetPlastic} className="mr-2" />
            Report
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/logout"}>
            <FontAwesomeIcon icon={faSignOut} className="mr-2" />
            Logout
          </NavLink>
        </NavItem>



      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Create Project",
      target: "projects/create",
    },
    {
      title: "All Projects",
      target: "/projects",
    },
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
  [
    {
      title: "Create User",
      target: "users/create",
    },
    {
      title: "All Users",
      target: "/users",
    },
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
