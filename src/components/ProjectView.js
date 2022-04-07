import React, { useEffect , useState} from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";



function TaskView() {

    const [TaskData, setTaskData] = useState("dummy task ");
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
        <tbody>
            <tr>
                <th scope="row">
                    1
                </th>
                <td>
                   {TaskData[0].title}
                </td>
                <td>
                {TaskData[0].description}
                </td>
                <td>
                {TaskData[0].time}
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
                   {TaskData[1].title}
                </td>
                <td>
                {TaskData[1].description}
                </td>
                <td>
                {TaskData[1].time}
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
    const [ProjectData, setProjectData] = useState("dummy project ");
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
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                           {ProjectData[0].title}
                        </td>
                        <td>
                           {ProjectData[0].description}
                        </td>
                        <td>
                            {ProjectData[0].time}
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
                           {ProjectData[1].title}
                        </td>
                        <td>
                           {ProjectData[1].description}
                        </td>
                        <td>
                            {ProjectData[1].time}
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
                           {ProjectData[2].title}
                        </td>
                        <td>
                           {ProjectData[2].description}
                        </td>
                        <td>
                            {ProjectData[2].time}
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