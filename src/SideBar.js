import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage,faClock,faUser,faSheetPlastic,faSignOut} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "./context/UserContext";
import paths from "./paths";

const SideBar = ({ isOpen, toggle }) => {
  const { role, logoutUser } = useUserContext();
  const navigate = useNavigate();
  const isAdmin = role === 'admin';
  const isUser = role === 'user';
  const handleLogout = () => {
    logoutUser();
    navigate(paths.login);
  };

  return (
    <div className={classNames("sidebar shadow-1", { "is-open": isOpen })}>
      <div className="sidebar-header shadow-2">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
        <h2>Foxy Clock </h2>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={Link} to={paths.home}>
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Tracker
            </NavLink>
          </NavItem>
          {/* {isUser && (<>
            <NavItem>
              <NavLink tag={Link} to={paths.projectsUser}>
                  <FontAwesomeIcon icon={faImage} className="mr-2" />
                  Records
              </NavLink>
          </NavItem>
          </>)} */}

          {isAdmin && (
            <>
              <NavItem>
                <NavLink tag={Link} to={paths.projects}>
                  <FontAwesomeIcon icon={faImage} className="mr-2" />
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={paths.users}>
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Users
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={paths.reports}>
                  <FontAwesomeIcon icon={faSheetPlastic} className="mr-2" />
                  Report
                </NavLink>
              </NavItem>
            </>  
          )}
          <NavItem>
            <NavLink onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOut} className="mr-2" />
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  )
};

export default SideBar;
