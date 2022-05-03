import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { SelectField } from "./components/Form";
import WorkspaceModal from './components/Modal/WorkspaceModal';
import { useForm } from 'react-hook-form';
import {
  Navbar,
  Button,
  NavbarToggler,
} from "reactstrap";
import { getRequest } from "./utils/http";
import { getOptions } from "./utils";
import { USER_STORAGE_KEY } from "./utils/constant";
import { getItem } from "./utils/storage";
import { useWorkspaceContext } from "./context/WorkspaceContext";
const Topbar = ({ toggleSidebar }) => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
  const userData= JSON.parse(getItem(USER_STORAGE_KEY));
  const [workspace, setWorkspace] = useState([]);
  // console.log(workspace);
  const{workspaceId ,settingWorkspaceId} = useWorkspaceContext();
  // console.log(userData);
  useEffect(() => {
    getRequest({
      url: `/workspaces`,
    })
    .then(function (response) {
      setWorkspace(response.data.workspaces);
      settingWorkspaceId(response.data.workspaces[0].id);
      //  settingWorkspaceId();
    })
  },[] );

  // // console.log(workspace);

  const handleChange=(e) => {
    console.log(e.target.value);
    console.log(e.target);
    // localStorage.setItem('workspace_id',e.target.value);
    settingWorkspaceId(e.target.value);
  }
  
  return (
    <Navbar
      color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <>
      <SelectField
              name="workspace_id"
              register={register}
              className="form-select"
              rules={{ required: true }}
              onChange={handleChange}
              value={workspaceId}
              options={getOptions(workspace)}
       />
      <WorkspaceModal buttonLabel="Create workspace "/>
      </>
     
        <h5 style={{color:"black"}}value={"Hello !"}> Hello ! {userData.name}
         </h5>
      <NavbarToggler onClick={toggleTopbar} />
    </Navbar>
  );
};

export default Topbar;
