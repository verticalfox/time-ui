import React, { useEffect, useState} from "react";
import { Table ,Button, Modal , ModalHeader ,ModalBody,ModalFooter} from "reactstrap";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProjectModal from './ProjectModal';
import TaskModal from './TaskModal'
function IterableTable(tableEntry) {
    return (
        <PrintTable 
        key={tableEntry.id}
        id={tableEntry.id}
        name={tableEntry.name}
        description={tableEntry.description} 
        />
    );
}

function PrintTable(props) {
    return (
                <tbody>

                    <tr>
                        <th scope="row">
                            {props.id}
                        </th>
                        <td>
                        <a href="/projects/view">{props.name}</a>
                            
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
    const [ProjectData, setProjectData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/project/`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (response) {
            setProjectData(response.data.projects);
            console.log(response.data.projects);
        })
    }, []);
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
                {ProjectData.map(IterableTable)}
            </Table>

        </div>
    );
}










/////start of task view ////
function IterableTableForView(tableEntry) {
    return (
        <PrintTableForView
        key={tableEntry.id}
        id={tableEntry.id}
        title={tableEntry.title}
        description={tableEntry.description}
        />
    );
}

function PrintTableForView(props) {

    return (
        <tbody>
            <tr>
                <th scope="row">
                    {props.id}
                </th>
                <td>
                    {props.title}
                </td>
                <td>
                    {props.description}
                </td>
                <td>
                    
                    <Link to="/projects/view/edit" className="btn btn-primary">
                        <FontAwesomeIcon icon={faPencil} className="mr-2" />
                        Edit
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/projects/view" className="btn btn-primary" >
                        <FontAwesomeIcon icon={faPencil} className="mr-2" />
                        Delete
                    </Link>
                </td>
            </tr>
        </tbody>
    );
}

function TaskView() {

    const [TaskData, setTaskData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/task`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (response) {
            setTaskData(response.data.tasks);
        }) 
    }, []);
    return (<div color="light"
        className="navbar shadow-sm p-3 mb-5 bg-white "
        expand="md">
        <Table striped>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Task
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                    <TaskModal buttonLabel="Create Task"/>
                    </th>
                </tr>
            </thead>
           { TaskData.map(IterableTableForView) }
        </Table>

    </div>);

}

//////end of task view///////


export default ProjectView;
export { TaskView };