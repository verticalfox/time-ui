import React, { useEffect, useState} from "react";
import { Table ,Button, Modal , ModalHeader ,ModalBody,ModalFooter} from "reactstrap";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { Link , useParams} from "react-router-dom";
import ProjectModal from './ProjectModal';
import TaskModal from './TaskModal'




function IterableTableForView(tableEntry, index) {
    return (
        <PrintTableForView
        key={tableEntry.id}
        id={index+1}
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
    const param = useParams();
    console.log("check :"+ param.id);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/task`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (response) {
            console.log(response.data.tasks);
            // setTaskData(response.data.tasks);
        }) 

        axios.get(`http://localhost:3000/api/v1/task/${param.id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (response) {
            console.log(response.data.task);
             setTaskData(response.data.task);
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
                    <TaskModal id={param.id} buttonLabel="Create Task"/>
                    </th>
                </tr>
            </thead>
           { TaskData.map(IterableTableForView) }
        </Table>

    </div>);

}

export default TaskView;