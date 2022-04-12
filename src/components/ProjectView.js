import React, { useEffect, useState} from "react";
import { Table } from "reactstrap";
import axios from 'axios';
import IterableTable from "./IterableTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function IterableTableForView(tableEntry) {
    return (
        <PrintTableForView
        key={tableEntry.id}
        id={tableEntry.id}
        title={tableEntry.title}
        description={tableEntry.description}
        time={tableEntry.time}    
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
                            {props.time}
                        </td>
                        <td>
                            <Link to="/project/view/edit" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Edit
                            </Link>
                        </td>
                    </tr>
                </tbody>
    );
}

function TaskView() {

    const [TaskData, setTaskData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/tasks`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(function (response) {
                setTaskData(response.data);
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
                        Total Time Taken
                    </th>
                </tr>
            </thead>
           { TaskData.map(IterableTableForView) }
        </Table>

    </div>);

}


function ProjectView() {
    // const [data, setdata] = useState(second);
    const [ProjectData, setProjectData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/projects`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(function (response) {
                setProjectData(response.data);
            })


    }, []);

    // console.log(ProjectData);
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
                            Total Time Taken
                        </th>
                    </tr>
                </thead>
                {ProjectData.map(IterableTable)}
            </Table>

        </div>
    );
}



export default ProjectView;
export { TaskView };