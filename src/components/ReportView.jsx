import React from "react";
import { withAuthenticate } from "../Routes";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { SelectField, TextField, TextAreaField } from './Form';
import { getOptions } from "../utils";
import { useForm } from "react-hook-form";
import { useProjects } from "../hooks/adminProjects";
import { useUsers } from "../hooks/userProjects";




function ReportView() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [projectLoading, users] = useUsers();


    function Card() {
        return (
            <div color="light"
                className="navbar shadow-sm p-3 mb-5 bg-white date-view "
                style={{ position: "relative" }}
                expand="md">

                <p> project name</p>
                <p> task name</p>
                <p> hours</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>


            </div>);
    }



    function handleSelect(ranges) {
        console.log(ranges);
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
            <div >
                <table>
                    <tr>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                    </tr>
                </table>
            </div>
        </div>

    );
}

export default withAuthenticate(ReportView);
