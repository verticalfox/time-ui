import React, { useEffect , useState} from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";


function UsersView() {
    const [UserData, setUserData] = useState("dummy task ");
    useEffect(() => {
        axios.get(`http://localhost:3000/users`, {
            headers: {
               'Access-Control-Allow-Origin': '*'
            }
        })
       .then(function (response) {
             setUserData(response.data);
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
                    Employee name 
                </th>
                <th>
                    Project Assigned
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">
                    1
                </th>
                <td>
                   {UserData[0].name}
                </td>
                <td>
                {UserData[0]['project assigned']}
                </td>
            </tr>
            <tr>
                <th scope="row">
                    2
                </th>
                <td>
                   {UserData[1].name}
                </td>
                <td>
                {UserData[1]['project assigned']}
                </td>
            </tr>
        </tbody>
    </Table>

</div>);
  }

  
  export default UsersView;