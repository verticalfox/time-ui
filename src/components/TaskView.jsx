import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil, faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import TaskModal from './TaskModal'
import EditTaskModal from './Modal/EditTaskModal'
import { deleteRequest, getRequest } from "../utils/http";
import DeleteModal from "./Modal/DeleteModal";
const handleDelete= (id) => {
         deleteRequest({
            url:`/tasks/${id}`
         }).then((res)=> {
             console.log("task deleted successfully !")
            
         });
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
                    <EditTaskModal buttonLabel="Edit" task__title={props.title} task__description={props.description} task__id={props.id} ></EditTaskModal>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteModal buttonLabel="Delete" delete={handleDelete} id={props.id} label="task"/>
                    {/* <Link to={`/projects/${props.project_id}/view`}className="btn btn-primary" onClick={()=>handleDelete(props.id)}><FontAwesomeIcon icon={faTrash} className="mr-2" />Delete </Link> */}
                </td>
            </tr>
        </tbody>
    );
}

function TaskView() {
    const param = useParams();  
    // const [loading, tasks] = useTasks(param.id);
    const [tasks , setTasks] = useState([]);   
    useEffect(() => {

        getRequest({
            url:`tasks/${param.id}`
            // url:`tasks/`
        }).then(response =>  setTasks(response.data.tasks));
    
    }, []);
    
    console.log("check :" + param.id);
    return (<div color="light"
        className="navbar shadow-sm p-3 mb-5 bg-white "
        expand="md">
        <table className="table table-hover">
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