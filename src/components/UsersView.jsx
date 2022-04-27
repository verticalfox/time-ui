import React from "react";
import { Button} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserModal from './Modal/UserModal'
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { useUsers } from "../hooks/adminProjects";
import EditUserModal from './Modal/EditUserModal'
import { deleteRequest } from "../utils/http";
function IterableTable2(info,index) {
    return (
        <PrintTable2
        key={info.id}
        index={index+1}
        id={info.id}
        name={info.name}
        email={info.email}
        mobile_number={info.mobile_number}
        role={info.role} 
        />
    );
}
function deleteUser(id) {

         deleteRequest({
            url:`/users/${id}`
         }).then((res)=> {
             console.log(" User deleted successfully !")
            
         });
}
function PrintTable2(props) {

    return (
                <tbody>

                    <tr>
                        <th scope="row">
                            {props.index}
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
                            {/* <Link to="/users/edit" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Edit
                            </Link> */}
                                <EditUserModal buttonLabel="Edit" user__name= {props.name} user__email= {props.email} user__id={props.id}  user__mobile_number={props.mobile_number}  user__role={props.role}></EditUserModal>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <Button className="btn" color="primary" onClick={()=>deleteUser(props.id)}>
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Delete
                            </Button>
                        </td>
                    </tr>
                </tbody>
    );
}
function UsersView() {
    const [loading , users] = useUsers();
    return ( <div color="light"
    className="navbar shadow-sm p-3 mb-5 bg-white "
    expand="md">
   <table className="table table-striped">
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
        {users.map(IterableTable2)}
    </table>
</div>);
  }

  
  export default UsersView;