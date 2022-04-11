import React, { useEffect , useState} from "react";
import { Table } from "reactstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";


function IterableTable2(tableEntry) {
    return (
        <PrintTable2
        key={tableEntry.id}
        id={tableEntry.id}
        name={tableEntry.name}
        projectAssigned={tableEntry.projectAssigned} 
        />
    );
}

function PrintTable2(props) {
    return (
                <tbody>

                    <tr>
                        <th scope="row">
                            {props.id}
                        </th>
                        <td>
                            {props.name}
                        </td>
                        <td>
                            {props.projectAssigned}
                        </td>
                        <td>
                            <Link to="/users/edit" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Edit
                            </Link>
                        </td>
                    </tr>
                </tbody>
    );
}
function UsersView() {
    const [UserData, setUserData] = useState([]);
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
        {UserData.map(IterableTable2)}
    </Table>

</div>);
  }

  
  export default UsersView;