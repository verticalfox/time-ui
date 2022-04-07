import React, { useEffect , useState} from "react";
import SubMenu from "../SubMenu";
import { Table } from "reactstrap";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";



function TaskView() {
    return ( <div color="light"
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
        <tbody>
            <tr>
                <th scope="row">
                    1
                </th>
                <td>
                   task 1
                </td>
                <td>
                    this is dummy task
                </td>
                <td>
                    3
                </td>
                <td>
                    <Link to="/project/view" className="btn btn-primary">
                        <FontAwesomeIcon icon={faPencil} className="mr-2" />
                        Edit
                    </Link>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    2
                </th>
                <td>
                    task 2
                </td>
                <td>
                    this is dummy task 2
                </td>
                <td>
                    3
                </td>
                <td>
                    <Link to="/project/view" className="btn btn-primary">
                        <FontAwesomeIcon icon={faPencil} className="mr-2" />
                        Edit
                    </Link>
                </td>
            </tr>
        </tbody>
    </Table>

</div>);

}


function ProjectView() {
    // const [data, setdata] = useState(second);
    // //put this below code in useEffect
    const [taskData, setTaskData] = useState("dummy task ");
    useEffect(() => {
        axios.get(`http://localhost:3000/projects/1`, {
            headers: {
               'Access-Control-Allow-Origin': '*'
            }
        })
       .then(function (response) {
             setTaskData(response.data);
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
                            Total Time Taken
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                           {taskData.title}
                        </td>
                        <td>
                            this is dummy project
                        </td>
                        <td>
                            3
                        </td>
                        <td>
                            <Link to="/project/view" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Edit
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Vertical fox Project 2
                        </td>
                        <td>
                            this is dummy project
                        </td>
                        <td>
                            3
                        </td>
                        <td>
                            <Link to="/project/view" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Edit
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Vertical fox Project 3
                        </td>
                        <td>
                            this is dummy project
                        </td>
                        <td>
                            3
                        </td>
                        <td>
                            <Link to="/project/view" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Edit
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
}



export default ProjectView;
export {TaskView};