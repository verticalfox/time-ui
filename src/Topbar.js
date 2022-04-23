import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { SelectField } from "./components/Form";
import WorkspaceModal from './components/Modal/WorkspaceModal';
import { useForm } from 'react-hook-form';
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
import UserModal from "./components/Modal/UserModal";
import { getRequest } from "./utils/http";
import { getOptions } from "./utils";

const Topbar = ({ toggleSidebar }) => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  
  // const [workspace, setWorkspace] = useState([]);
  // useEffect(() => {
  //   getRequest({
  //     url: `/workspaces`,
  //   })
  //   .then(function (response) {
  //     setWorkspace(response.data.workspace);
  //     console.log("topbar console response");
  //     console.log(workspace[0].id);
  //     console.log(workspace.values);
  //   })
  // }, []);



  return (
    <Navbar
      color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <>
      {/* <SelectField
              name="workspace_id"
              register={register}
              className="form-select"
              rules={{ required: true }}
              // value=""
              options={getOptions(workspace)}
            /> */}
      {/* <select>
      <FontAwesomeIcon icon={faAlignLeft} />
        <option>
         workspace-VF-1
        </option>
      </select> */}
      <WorkspaceModal buttonLabel="Create workspace "/>
      </>
     
      <h5 style={{color:"black"}}value={"Hello ! Jayesh"}> Hello ! John
         </h5>
      <NavbarToggler onClick={toggleTopbar} />
    </Navbar>
  );
};

export default Topbar;
