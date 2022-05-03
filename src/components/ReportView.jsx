import React, { useState } from "react";
import { withAuthenticate } from "../Routes";
import { DateRangePicker } from 'react-date-range';
import { SelectField, TextField, TextAreaField } from './Form';
import { getOptions } from "../utils";
import { useForm } from "react-hook-form";
import { useUsers } from "../hooks/userProjects";
import { Calendar } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { getRequest } from "../utils/http";
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

function dateFormat(input) {

    // var day= JSON.stringify(input).slice(1,11);
    var day = input.getDay();
    var month = input.getMonth();
    var year = input.getFullYear();
    console.log(day, month, year);
}
function ReportView() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [projectLoading, users] = useUsers();
    const watchUserId = watch('user_id');
    console.log(watchUserId);
    console.log(users);
    const [formData, setFormData] = useState([]);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    console.log("starting date" + state[0].startDate);
    console.log("ending date" + state[0].endDate);
   
    function handleClick() {
        getRequest({
            url: `time_entries/${watchUserId}?start_date=12-1-2022&end_date=12-5-2022`,
          })
          .then(function (response) {
            console.log(response);
          })
        
    }

    return (
        <div>
            <div color="light"
                className="navbar shadow-sm p-2 mb-5 bg-white date-view "
                style={{ position: "relative" }}
                expand="md" >
                     <SelectField
                    labelText="select member"
                    name="user_id"
                    register={register}
                    rules={{ required: true }}
                    options={getOptions(users)}
                />
                     <DateRangePicker
                        onChange={item => setState([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={state}
                        direction="horizontal"
                    />
                    <button onClick={handleClick}> Generate Report</button>
               
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
                    {users.map((info, index) => {
                        return (
                            <ReportRow
                                key={info.id}
                                index={index + 1}
                                id={info.id}
                                project_name="project name"
                                task_name="task name"
                                description=" this is random description of random task"
                                hours="6"
                            />
                        );
                    })}
                </table>
            </div>
        </div>

    );
}
export default withAuthenticate(ReportView);

