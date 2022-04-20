import React, { useEffect , useState} from "react";
import { Table , Button} from "reactstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserModal from './UserModal'
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
function IterableTable2(info,index) {
    return (
        <PrintTable2
        key={info.id}
        id={index+1}
        name={info.name}
        email={info.email}
        mobile_number={info.mobile_number}
        role={info.role} 
        />
    );
}
function deleteUser(index) {
    console.log(index);
    axios.delete(`http://localhost:3000/users/${index}`, {
            headers: {
               'Access-Control-Allow-Origin': '*'    
            }
        })
       .then(function (response) {
            console.log(response.data  + ": deleted successfully !");
         })

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
                            {props.email}
                        </td>
                        <td>
                            {props.mobile_number}
                        </td>
                        <td>
                            {props.role}
                        </td>
                        <td>
                            <Link to="/users/edit" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Edit
                            </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <Button className="btn" color="primary" onClick={deleteUser(props.id)}>
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Delete
                            </Button>
                        </td>
                    </tr>
                </tbody>
    );
}
function UsersView() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/users`, {
            headers: {
               'Access-Control-Allow-Origin': '*'
            }
        })
       .then(function (response) {
             setUserData(response.data.users);
             console.log(userData);
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
                    Email
                </th>
                <th>
                    Phone
                </th>
                <th>
                    Role
                </th>
                <th>
                <UserModal buttonLabel="Create User"/>
                </th>
            </tr>
        </thead>
        {userData.map(IterableTable2)}
    </Table>
</div>);
  }

  
  export default UsersView;