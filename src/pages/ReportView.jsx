import React, { useState } from "react";
import { withAuthenticate } from "../Routes";
import { DateRangePicker } from 'react-date-range';
import { SelectField } from '../components/Form';
import { getOptions } from "../utils";
import { useForm } from "react-hook-form";
import { useUsers } from "../hooks/userProjects";
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { getRequest } from "../utils/http";
import { AUTH_TOKEN_STORAGE_KEY } from "../utils/constant";

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
function ReportView() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [projectLoading, users] = useUsers();
    const [reports, setReports] = useState([]);
    const watchUserId = watch('user_id');
     console.log(watchUserId);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    var startDate = convert(state[0].startDate);
    var endDate = convert(state[0].endDate);

    const handleDownloadPdf = () => {
        fetch(`http://localhost:3000/api/v1/time_entries/report.pdf?created_by_id=${watchUserId}&start_date=${startDate}&end_date=${endDate}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': auth_token
            }
        }).then((result) => {
            window.location.href = result.url;
        });
    }
    function handleClick() {
        // console.log(watchUserId);
        getRequest({
            url: `time_entries/${watchUserId}?start_date=${startDate}&end_date=${endDate}`,
        })
            .then(function (response) {
                // console.log(response);
                setReports(response.data.time_entries);
            })

    }
    return (
        <div>
            <div color="light"
                className="shadow-sm p-4 mb-3 bg-white date-view shadow-1"
                expand="md" >
                <SelectField
                    labelText="select member"
                    name="user_id"
                    register={register}
                    rules={{ required: true }}
                    options={getOptions(users)}
                    className="date-view-items"
                />
                <DateRangePicker
                    onChange={item => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={state}
                    direction="horizontal"
                    className="date-view-items"
                />
                <div className="btn-group date-view-items">
                    <button className="btn-secondary" onClick={handleClick}> Generate Report</button>
                    <button className="btn-secondary" onClick={handleDownloadPdf}> Download as pdf</button>
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
export default withAuthenticate(ReportView);