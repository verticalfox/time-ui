import React, { useState, useEffect } from "react";
import { withAuthenticate } from "../Routes";
import { DateRangePicker , DateRange , Calendar } from 'react-date-range';

import { SelectField } from '../components/Form';
import { getOptions } from "../utils";
import { useForm } from "react-hook-form";
import { useUsers } from "../hooks/userProjects";
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { getRequest } from "../utils/http";
import { AUTH_TOKEN_STORAGE_KEY } from "../utils/constant";
import TrackerView from "./TrackerView";

function convert(str) {
    var date = new Date(str),
        month = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day, month, date.getFullYear()].join("-");
}
//   console.log(convert("Thu Jun 09 2011 00:00:00 GMT+0530 (India Standard Time)"))
const auth_token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
// console.log(auth_token);
function ReportRow(props) {
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.description}</td>
            <td>{props.hours}</td>
        </tr>
    );
}
function ProjectViewUser() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [projectLoading, users] = useUsers();
    const [reports, setReports] = useState([]);
    const watchUserId = watch('user_id');
     console.log(watchUserId);
     const [date, setDate] = useState(null);
    function handleClick() {
        console.log(date);
        // console.log(watchUserId);
        getRequest({
            url: `time_entries/da8758a9-842d-4659-9e91-bad41a598ecd?start_date=01-01-2000&end_date=01-01-2024`,
        })
            .then(function (response) {
                // console.log(response);
                setReports(response.data.time_entries);
            })

    }
    useEffect(() => {
        getRequest({
            url: `time_entries/da8758a9-842d-4659-9e91-bad41a598ecd?start_date=01-01-2000&end_date=01-01-2024`,
        })
            .then(function (response) {
                // console.log(response);
                setReports(response.data.time_entries);
            })
    }, [])
    
    return (
        <div>
            <div color="light"
                className="shadow-sm p-4 mb-3 bg-white date-view shadow-1"
                expand="md" >
                {/* <SelectField
                    labelText="select member"
                    name="user_id"
                    register={register}
                    rules={{ required: true }}
                    options={getOptions(users)}
                    className="date-view-items"
                /> */}
                <Calendar onChange={item => { 
                    console.log(item);
                setDate(item)}}
                date={date} />

                <div className="btn-group date-view-items">
                    <button className="btn-secondary" onClick={handleClick}>Submit</button>
                    {/* <button className="btn-secondary" onClick={handleDownloadPdf}> Download as pdf</button> */}
                </div>
            </div>
            <div color="light"
                className="navbar shadow-sm p-3 mb-5 bg-white shadow-1"
                expand="md">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task description</th>
                            <th>Total duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map((info, index) => {
                                return (
                                    <ReportRow
                                        key={info.id}
                                        index={index + 1}
                                        id={info.id}
                                        description={info.description}
                                        hours={info.hours}
                                    />
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default withAuthenticate(ProjectViewUser);
















// import { Link } from "react-router-dom";
// import { useProjects } from '../hooks/adminProjects';
// import ProjectModal from '../components/modal/ProjectModal';
// import EditProjectModal from '../components/modal/EditProjectModal'
// import { deleteRequest } from "../utils/http";
// import { withAuthenticate } from "../Routes";
// import { useWorkspaceContext } from "../context/WorkspaceContext";
// import DeleteModal from "../components/modal/DeleteModal";
// import { useState } from "react";

// const handleDelete = (id) => {
//     deleteRequest({
//         url: `/projects/${id}`
//     }).then((res) => {
//         console.log("project deleted successfully !")
//     });
// }
// const ProjectRow = (props) => {
// const {workspaceId, settingWorkspaceId} = useWorkspaceContext();
// // console.log(workspaceId);
//     return (    
//         <tr>
//             <th scope="row">{props.index}</th>
//             <td><Link to={`/projects/${props.id}/view`}>{props.name}</Link></td>
//             <td><Link to={`/projects/${props.id}/view`}>{props.description}</Link></td>
//             <td>
//                 <EditProjectModal buttonLabel="" project__name={props.name} project__description={props.description} project__id={props.id} ></EditProjectModal>&nbsp;&nbsp;&nbsp;&nbsp;
//                 <DeleteModal buttonLabel="" delete={handleDelete} id={props.id} label="project"/>
//             </td>
//         </tr>
//     );
// }

// function ProjectViewUser() {
//     const [loading, projects] = useProjects();
//     const [refresh , setRefresh] = useState(false);
//     return (
//         <div color="light"
//             className="navbar shadow-sm p-3 mb-5 bg-white shadow-1"
//             expand="md">
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Project</th>
//                         <th>Description</th>
//                         <th><ProjectModal  refresh={refresh} setRefresh={setRefresh} buttonLabel="Create Project"/></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         projects.map((project, index) => {
//                         return (
//                             <ProjectRow
//                                 key={project.id}
//                                 index={index + 1}
//                                 id={project.id}
//                                 name={project.name}
//                                 description={project.description}
//                             />);
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// }
// export default withAuthenticate(ProjectViewUser);