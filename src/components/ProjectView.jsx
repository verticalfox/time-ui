import React, { useState , useContext} from "react";
import { Table} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";

import { useProjects } from '../hooks/adminProjects';

import ProjectModal from './Modal/ProjectModal';
import axios from "axios";
import EditProjectModal from './Modal/EditProjectModal'
import CreateProject from "./CreateProject";
import authContext from "../context/authContext";









const handleDelete= (id) => {
    axios.delete(`http://localhost:3000/api/v1/projects/${id}`, {
            headers: {
               'Access-Control-Allow-Origin': '*'    
            }
        })
       .then(function (response) {
            console.log(response.data  + ": deleted successfully !");
            // window.location.reload(true);
         })

}

const handleEdit= (id) => {
    console.log("you are in edit");


}

const PrintTable =(props) => {
    return (
        <tbody>
            <tr>
                <th scope="row">
                    {props.index}
                </th>
                <td>
                    <Link to={`/projects/${props.id}/view`}>{props.name}</Link>
                </td>
                <td>
                    <a href="/projects/view">{props.description}</a>
                </td>
                <td>
                
                    <EditProjectModal buttonLabel="Edit" project__name={props.name} project__description={props.description} project__id={props.id} ></EditProjectModal>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`/projects`}className="btn btn-primary" onClick={()=>handleDelete(props.id)}><FontAwesomeIcon icon={faPencil} className="mr-2" />Delete </Link>
                
                    
                </td>
            </tr>
        </tbody>
    );
}
function ProjectView() {
    const [loading, projects] = useProjects();
    const [userData , setUserData] = useState("");

    //testing context 

  const c = useContext(authContext);
  console.log("role passed in ProjectView through context" + c.userRole);



//end of testing context







    return (
        <div color="light"
            className="navbar shadow-sm p-3 mb-5 bg-white "
            expand="md">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Project
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            <ProjectModal buttonLabel="Create Project" />
                        </th>
                    </tr>
                </thead>
                {projects.map((project, index) => {
                    return (
                        <PrintTable
                            key={project.id}
                            index={index + 1}
                            id={project.id}
                            name={project.name}
                            description={project.description}
                        />
                    );
                }
                )}
            </table>

        </div>
    );
}
export default ProjectView;