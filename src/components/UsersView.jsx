import React from "react";
import UserModal from './Modal/UserModal'
import { useUsers } from "../hooks/adminProjects";
import EditUserModal from './Modal/EditUserModal'
import { deleteRequest } from "../utils/http";
import { withAuthenticate } from "../Routes";
import DeleteModal from "./Modal/DeleteModal";
function deleteUser(id) {
    deleteRequest({
        url: `/users/${id}`
    }).then((res) => {
        console.log(" User deleted successfully !")
    });
}
function UsersRow(props) {

    return (
            <tr>
                <th scope="row">{props.index}</th>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.mobile_number}</td>
                <td>{props.role}</td>
                <td>
                    <EditUserModal buttonLabel="Edit" user__name={props.name} user__email={props.email} user__id={props.id} user__mobile_number={props.mobile_number} user__role={props.role}></EditUserModal> &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteModal buttonLabel="Delete" delete={deleteUser} id={props.id} label="user"/>
                </td>
            </tr>
    );
}
function UsersView() {
    const [loading, users] = useUsers();
    // console.log(users);
    return (<div color="light"
        className="navbar shadow-sm p-3 mb-5 bg-white shadow-1"
        expand="md">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Employee name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th><UserModal className="shadow-1" buttonLabel="Create User"/></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((info, index) => {
                    return (
                        <UsersRow
                            key={info.id}
                            index={index + 1}
                            id={info.id}
                            name={info.name}
                            email={info.email}
                            mobile_number={info.mobile_number}
                            role={info.role}
                        />)
                    })
                }
            </tbody>
        </table>
    </div>);
}


export default withAuthenticate(UsersView);