import React from "react";
import SubMenu from "../SubMenu";
import { Card , CardGroup,CardBody,CardTitle,CardSubtitle,CardImg,CardText,Button,Table} from "reactstrap";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {
    faPencil,
  } from "@fortawesome/free-solid-svg-icons";



function TaskView() {
    return(<div>
        <h4>
            you are inside task view now !!
        </h4>
    </div>);

}


function ProjectView() {
    // const [data, setdata] = useState(second);
    // //put this below code in useEffect
    //  axios.get(`http://localhost:3000/projects`, {
    //      headers: {
    //         'Access-Control-Allow-Origin': '*'
    //      }
    //  })
    // .then(function (response) {
    //     console.log(response);
    //   })

    return(
      <div  color="light"
      light
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
        Vertical fox Project 1
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

  const task_array = [
    [
      {
        title: "Task 1",
        target: "task-1",
      },
      {
        title: "Task 2",
        target: "task-2",
      },
      {
        title: "Task 3",
        target: "task-3",
      },
    ]
  ];
  
  
  export default ProjectView