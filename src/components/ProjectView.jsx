import React from "react";
import { Table} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";

import { useProjects } from '../hooks/adminProjects';

import ProjectModal from './Modal/ProjectModal';
import axios from "axios";
const handleDelete= (id) => {
    axios.delete(`http://localhost:3000/api/v1/project/${id}`, {
            headers: {
               'Access-Control-Allow-Origin': '*'    
            }
        })
       .then(function (response) {
            console.log(response.data  + ": deleted successfully !");
         })

         window.location.reload(true);
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
                    <Link to="/projects/edit" className="btn btn-primary"><FontAwesomeIcon icon={faPencil} className="mr-2" /> Edit</Link>
                     &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`/projects`}className="btn btn-primary" onClick={()=>handleDelete(props.id)}><FontAwesomeIcon icon={faPencil} className="mr-2" />Delete </Link>
                </td>
            </tr>
        </tbody>
    );
}
function ProjectView() {
    const [loading, projects] = useProjects();
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