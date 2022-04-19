import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faAlignRight } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <select>
        <option>
          workspace 1
        </option>
        <option>
          workspace 2
        </option>
        <option>
          workspace 3
        </option>
        <option>
          workspace 4
        </option>
      </select>
      <h5 style={{color:"black"}}value={"Hello ! Jayesh"}> Hello ! John
         </h5>
      <NavbarToggler onClick={toggleTopbar} />
    </Navbar>
  );
};

export default Topbar;
