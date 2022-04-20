import React, { useEffect, useState} from "react";
import { Table ,Button, Modal , ModalHeader ,ModalBody,ModalFooter} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Link , useParams } from "react-router-dom";

import { useProjects } from '../hooks/adminProjects';

import ProjectModal from './ProjectModal';
import TaskModal from './TaskModal'
function IterableTable(project,index) {
    return (
        <PrintTable 
        key={project.id}
        index={index+1}
        id={project.id}
        name={project.name}
        description={project.description} 
        />
    );
}


function PrintTable(props) {
    return (
        
                <tbody>

                    <tr>
                        <th scope="row">
                            {props.index }
                        </th>
                        <td>
                        <Link to={`/projects/${props.id}/view`}>{props.name}</Link>
                            
                        </td>
                        <td>
                        <a href="/projects/view">{props.description}</a>
                          
                        </td>
                        <td>
                            <Link to="/projects/edit" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Edit
                            </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/projects" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Delete
                            </Link>
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
              
            <Table striped>
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
                        <ProjectModal buttonLabel="Create Project"/>
                        </th>
                    </tr>
                </thead>
                {projects.map(IterableTable)}
            </Table>

        </div>
    );
}

export default ProjectView;