import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
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
            <tr>
                <th scope="row">{props.index}</th>
                <td>{props.title}</td>
                <td>{props.description}</td>
                <td>
                    <EditTaskModal buttonLabel="" task__title={props.title} task__description={props.description} task__id={props.id} ></EditTaskModal>&nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteModal buttonLabel="" delete={handleDelete} id={props.id} label="task"/>
                </td>
            </tr>
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
    
    // console.log("check :" + param.id);
    return (<div color="light"
        className="navbar shadow-sm p-3 mb-5 bg-white shadow-1"
        expand="md">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th><TaskModal id={param.id} buttonLabel="Create Task" /></th>
                </tr>
            </thead>
            <tbody>
            {
                tasks.map((tableEntry, index) => {
                return (
                    <PrintTableForView
                        key={tableEntry.id}
                        index={index + 1}
                        id={tableEntry.id}
                        title={tableEntry.title}
                        project_id={param.id}
                        description={tableEntry.description}/>);
                         })
            }
            </tbody>
        </table>
    </div>);
}
export default TaskView;