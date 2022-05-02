import React, { useState } from "react";
import { withAuthenticate } from "../Routes";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { SelectField, TextField, TextAreaField } from './Form';
import { getOptions } from "../utils";
import { useForm } from "react-hook-form";
import { useProjects } from "../hooks/adminProjects";
import { useUsers } from "../hooks/userProjects";
import ProjectModal from "./Modal/ProjectModal";
import { useWorkspaceContext } from "../context/WorkspaceContext";
import EditProjectModal from "./Modal/EditProjectModal";
import { Link } from "react-router-dom";

function ReportRow(props) {
    return (
        <tbody>
            <tr>
                <td>
                    {props.index}
                </td>
                <td>
                    {props.project_name}
                </td>
                <td>
                    {props.task_name}
                </td>
                <td>
                  {props.description}
                </td>
                <td>
                    {props.hours}
                </td>
            </tr>
        </tbody>
    );
}

function ReportView() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [projectLoading, users] = useUsers();
    const [formData , setFormData] = useState([]);
    function handleSelect(ranges) {
        console.log(ranges);
        console.log("start date selected : " + JSON.stringify(ranges.selection.startDate));
        console.log("end date selected" + ranges.selection.endDate);
        setFormData({
            ...formData,
            startDate : JSON.stringify(ranges.selection.startDate),
            endDate : JSON.stringify(ranges.selection.endDate)
        })
     
        {
            selection: {
                // startDate: [native Date Object],
                // endDate: [native Date Object],
            }
        }
    }
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
    return (
        <div>
            <div color="light"
                className="navbar shadow-sm p-2 mb-5 bg-white date-view "
                style={{ position: "relative" }}
                expand="md" >

                <SelectField
                    labelText="select member"
                    name="project_id"
                    register={register}
                    rules={{ required: true }}
                    options={getOptions(users)}
                />

                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                />

            </div>
            <div color="light"
                className="navbar shadow-sm p-3 mb-5 bg-white "
                expand="md">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Project
                            </th>
                            <th>
                                Task
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Hours
                            </th>
                        </tr>
                    </thead>
                    {/* <tbody> */}
                    {users.map((info, index) => {
                    return (
                        <ReportRow
                            key={info.id}
                            index={index + 1}
                            id={info.id}
                            project_name="project name"
                            task_name="task name"
                            description=" this is random description of random task"
                            hours= "6"
                        />
                    );
                })}
                        {/* <tr>
                            <td>
                                1
                            </td>
                            <td>
                                Project 2
                            </td>
                            <td>
                                Task 1
                            </td>
                            <td>
                                minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            </td>
                            <td>
                                7
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                Project 1
                            </td>
                            <td>
                                Task 1
                            </td>
                            <td>
                                "Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </td>
                            <td>
                                6
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                Project 1
                            </td>
                            <td>
                                Task 2
                            </td>
                            <td>
                                minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            </td>
                            <td>
                                8
                            </td>
                        </tr> */}
                    {/* </tbody> */}
                </table>
            </div>
        </div>

    );
}



export default withAuthenticate(ReportView);








//     function Card() {
//         return (
//             <div color="light"
//                 className="navbar shadow-sm p-3 mb-5 bg-white date-view "
//                 style={{ position: "relative" }}
//                 expand="md">

//                 <p> project name</p>
//                 <p> task name</p>
//                 <p> hours</p>
//                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//                     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>


//             </div>);
//     }






//             <div >
//                 <table>
//                     <tr>
//                         <td>
//                             <Card />
//                         </td>
//                         <td>
//                             <Card />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <Card />
//                         </td>
//                         <td>
//                             <Card />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <Card />
//                         </td>
//                         <td>
//                             <Card />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <Card />
//                         </td>
//                         <td>
//                             <Card />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <Card />
//                         </td>
//                         <td>
//                             <Card />
//                         </td>
//                     </tr>
//                 </table>
//             </div>