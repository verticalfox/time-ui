import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import TaskModal from './TaskModal'
import { useTasks } from '../hooks/userProjects'
import axios from "axios";
import EditTaskModal from './Modal/EditTaskModal'
const handleDelete= (id) => {
    axios.delete(`http://localhost:3000/api/v1/tasks/${id}`, {
            headers: {
               'Access-Control-Allow-Origin': '*'    
            }
        })
       .then(function (response) {
            console.log(response.data  + ": deleted successfully !");
         })
        
        //  window.location.reload(true);
}

function PrintTableForView(props) {
    return (
        <tbody>
            <tr>
                <th scope="row">
                    {props.index}
                </th>
                <td>
                    {props.title}
                </td>
                <td>
                    {props.description}
                </td>
                <td>
                    {/* <Link to="/projects/view/edit" className="btn btn-primary"><FontAwesomeIcon icon={faPencil} className="mr-2" />Edit</Link> */}
                    <EditTaskModal buttonLabel="Edit" task__title={props.title} task__description={props.description} task__id={props.id} ></EditTaskModal>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`/projects/${props.project_id}/view`}className="btn btn-primary" onClick={()=>handleDelete(props.id)}><FontAwesomeIcon icon={faPencil} className="mr-2" />Delete </Link>
                </td>
            </tr>
        </tbody>
    );
}

function TaskView() {
    const param = useParams();  
    const [loading, tasks] = useTasks(param.id);   
    console.log("check :" + param.id);
    return (<div color="light"
        className="navbar shadow-sm p-3 mb-5 bg-white "
        expand="md">
        <table className="table table-striped" striped>
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
                        <TaskModal id={param.id} buttonLabel="Create Task" />
                    </th>
                </tr>
            </thead>
            {tasks.map((tableEntry, index) => {
                console.log("this is table entry id :" + tableEntry.id);
                return (
                    <PrintTableForView
                        key={tableEntry.id}
                        index={index + 1}
                        id={tableEntry.id}
                        title={tableEntry.title}
                        project_id={param.id}
                        description={tableEntry.description}
                    />
                );
            })}
        </table>
    </div>);

}

export default TaskView;