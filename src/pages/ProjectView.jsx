import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faCross, faDeleteLeft, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useProjects } from '../hooks/adminProjects';
import ProjectModal from '../components/Modal/ProjectModal';
import EditProjectModal from '../components/Modal/EditProjectModal'
import { deleteRequest } from "../utils/http";
import { withAuthenticate } from "../Routes";
import WorkspaceContext, { useWorkspaceContext } from "../context/WorkspaceContext";

const handleDelete = (id) => {
    deleteRequest({
        url: `/projects/${id}`
    }).then((res) => {
        console.log("project deleted successfully !")
    });
}
const ProjectRow = (props) => {
const {workspaceId, settingWorkspaceId} = useWorkspaceContext();
console.log(workspaceId);


    return (    
        <tr>
            <th scope="row">
                {props.index}
            </th>
            <td>
                <Link to={`/projects/${props.id}/view`}>{props.name}</Link>
            </td>
            <td>
                <Link to={`/projects/${props.id}/view`}>{props.description}</Link>
            </td>
            <td>
                <EditProjectModal buttonLabel="Edit" project__name={props.name} project__description={props.description} project__id={props.id} ></EditProjectModal>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={`/projects`} className="btn btn-primary" onClick={() => handleDelete(props.id)}><FontAwesomeIcon icon={faTrash} className="mr-2" />Delete </Link>
            </td>
        </tr>
    );
}

function ProjectView() {
    const [loading, projects] = useProjects();
    return (
        <div color="light"
            className="navbar shadow-sm p-3 mb-5 bg-white "
            expand="md">
            <table className="table table-hover">
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
                <tbody>
                    {projects.map((project, index) => {
                        return (
                            <ProjectRow
                                key={project.id}
                                index={index + 1}
                                id={project.id}
                                name={project.name}
                                description={project.description}
                            />
                        );
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default withAuthenticate(ProjectView);