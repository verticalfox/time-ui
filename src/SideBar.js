import React, { useContext } from "react";
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
import { MyContext } from "./App";
import authContext from "./context/authContext";


var user=false;
// var user_role = localStorage.getItem('user_role');
// console.log("sidebar | role | : " + user_role);
// if(user_role==='user') {
//   user=true;
// }
const SideBar = ({ isOpen, toggle }) => { 
  const authCurrentContext=useContext(authContext);
  // authCurrentContext.updateRole(localStorage.getItem('user_role'));
  const user_role= authCurrentContext.userRole;
  
  return(

 

  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h2 >Foxy Clock </h2>
       
    </div>

    { (user_role === 'user') ?
    
    
    
    (
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

          <NavItem>
        <NavLink tag={Link} to={"/logout"}>
          <FontAwesomeIcon icon={faSignOut} className="mr-2" />
          Logout
        </NavLink>
      </NavItem>


  
        </Nav>
      </div>
  ) 
    
    
    : 
    
    
    
    (<div className="side-menu">
    <Nav vertical className="list-unstyled pb-3">


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
    
    
    
    
    
    
    )
    
    
    
    
    
    }



    
  </div>
)};

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
