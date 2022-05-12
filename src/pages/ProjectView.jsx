import { Link } from "react-router-dom";
import { useProjects } from '../hooks/adminProjects';
import ProjectModal from '../components/Modal/ProjectModal';
import EditProjectModal from '../components/Modal/EditProjectModal'
import { deleteRequest } from "../utils/http";
import { withAuthenticate } from "../Routes";
import { useWorkspaceContext } from "../context/WorkspaceContext";
import DeleteModal from "../components/Modal/DeleteModal";
import { useState } from "react";

const handleDelete = (id) => {
    deleteRequest({
        url: `/projects/${id}`
    }).then((res) => {
        console.log("project deleted successfully !")
    });
}
const ProjectRow = (props) => {
const {workspaceId, settingWorkspaceId} = useWorkspaceContext();
// console.log(workspaceId);
    return (    
        <tr>
            <th scope="row">{props.index}</th>
            <td><Link to={`/projects/${props.id}/view`}>{props.name}</Link></td>
            <td><Link to={`/projects/${props.id}/view`}>{props.description}</Link></td>
            <td>
                <EditProjectModal buttonLabel="" project__name={props.name} project__description={props.description} project__id={props.id} ></EditProjectModal>&nbsp;&nbsp;&nbsp;&nbsp;
                <DeleteModal buttonLabel="" delete={handleDelete} id={props.id} label="project"/>
            </td>
        </tr>
    );
}

function ProjectView() {
    const [loading, projects] = useProjects();
    const [refresh , setRefresh] = useState(false);
    return (
        <div color="light"
            className="navbar shadow-sm p-3 mb-5 bg-white shadow-1"
            expand="md">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project</th>
                        <th>Description</th>
                        <th><ProjectModal  refresh={refresh} setRefresh={setRefresh} buttonLabel="Create Project"/></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((project, index) => {
                        return (
                            <ProjectRow
                                key={project.id}
                                index={index + 1}
                                id={project.id}
                                name={project.name}
                                description={project.description}
                            />);
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default withAuthenticate(ProjectView);