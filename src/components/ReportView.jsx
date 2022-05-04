import React, { useState } from "react";
import { withAuthenticate } from "../Routes";
import { DateRangePicker } from 'react-date-range';
import { SelectField } from './Form';
import { getOptions } from "../utils";
import { useForm } from "react-hook-form";
import { useUsers } from "../hooks/userProjects";
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { getRequest } from "../utils/http";

function convert(str) {
    var date = new Date(str),
        month = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day, month, date.getFullYear()].join("-");
}
//   console.log(convert("Thu Jun 09 2011 00:00:00 GMT+0530 (India Standard Time)"))
function ReportRow(props) {
    return (
        <tbody>
            <tr>
                <td>{props.index}</td>
                <td>{props.description}</td>
                <td>{props.hours}</td>
            </tr>
        </tbody>
    );
}
function ReportView() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [projectLoading, users] = useUsers();
    const [reports, setReports] = useState([]);
    const watchUserId = watch('user_id');
    // console.log(watchUserId);
    const [formData, setFormData] = useState([]);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    var startDate = convert(state[0].startDate);
    var endDate = convert(state[0].endDate)
    function handleClick() {
        // console.log(watchUserId);
        getRequest({
            url: `time_entries/${watchUserId}?start_date=${startDate}&end_date=${endDate}`,
        })
            .then(function (response) {
                console.log(response);
                setReports(response.data.time_entries);
            })

    }
    console.log(reports);
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
                <button className="btn-secondary" onClick={handleClick}> Generate Report</button>
            </div>
            <div color="light"
                className="navbar shadow-sm p-3 mb-5 bg-white "
                expand="md">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task description</th>
                            <th>Total duration</th>
                        </tr>
                    </thead>
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
                            ); })
                    }
                </table>
            </div>
        </div>

    );
}
export default withAuthenticate(ReportView);