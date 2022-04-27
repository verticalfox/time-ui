import React, { useState,useEffect,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faAlignRight } from "@fortawesome/free-solid-svg-icons";
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
import authContext from "./context/authContext";

const Topbar = ({ toggleSidebar }) => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
  // const name=localStorage.getItem('user_name');
  
  const authCurrentContext=useContext(authContext);
  // authCurrentContext.updateRole(localStorage.getItem('user_role'));
  const user_role= authCurrentContext.userRole;

  const [workspace, setWorkspace] = useState([]);
  useEffect(() => {
    getRequest({
      url: `/workspaces`,
    })
    .then(function (response) {
      setWorkspace(response.data.workspaces);
    })
  },[] );

  // // console.log(workspace);

  const handleChange=(e) => {
    console.log(e.target.value);
    localStorage.setItem('workspace_id',e.target.value);
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
              options={getOptions(workspace)}
       />
      <WorkspaceModal buttonLabel="Create workspace "/>
      </>
     
        <h5 style={{color:"black"}}value={"Hello !"}> Hello ! {localStorage.getItem('user_name')}
         </h5>
      <NavbarToggler onClick={toggleTopbar} />
    </Navbar>
  );
};

export default Topbar;
