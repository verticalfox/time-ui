import React, { useEffect, useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { useForm } from 'react-hook-form';
import { SelectField, TextField, TextAreaField } from '../components/Form';
import { useProjects, useTasks } from '../hooks/userProjects';
import { getOptions } from "../utils";
import { useCreateTimeEntry } from '../hooks/useCreateTimeEntry';
import { withAuthenticate } from "../Routes";
import { Calendar } from "react-date-range";
import { deleteRequest, getRequest } from "../utils/http";
import EditProjectModal from "../components/modal/EditProjectModal";
import DeleteModal from "../components/modal/DeleteModal";

function convert(str) {
  var date = new Date(str),
    month = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, month, date.getFullYear()].join("-");
}
const handleDelete = (id) => {
  deleteRequest({
      url: `/time_entries/${id}`
  }).then((res) => {
      console.log("task entry deleted successfully !")
  });
}
const ReportRow = (props) => {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.description}</td>
      <td>{props.hours}</td>
      <td>
                <EditProjectModal buttonLabel="" project__name={props.name} project__description={props.description} project__id={props.id} ></EditProjectModal>&nbsp;&nbsp;&nbsp;&nbsp;
                <DeleteModal buttonLabel="" delete={handleDelete} id={props.id} label="task entry"/>
            </td>
    </tr>
  );
}

const TrackerView = () => {

  const { register, handleSubmit, watch, formState: { errors }, getValues , ...rest } = useForm();
  console.log('data', getValues());
  const [projectLoading, projects] = useProjects();
  const watchProjectId = watch('project_id');
  const [taskLoading, tasks] = useTasks(watchProjectId);
  const { submitting, onCreate } = useCreateTimeEntry();
  const [reports, setReports] = useState([]);
  const [date, setDate] = useState(null);



  var str = "Tue May 10 2022 00:00:00 GMT+0530 (India Standard Time)"





  // console.log(projectLoading, taskLoading, errors);
  useEffect(() => {
    getRequest({
      url: `time_entries/da8758a9-842d-4659-9e91-bad41a598ecd?start_date=${convert(date)}&end_date=${convert(date)}`,
    })
      .then(function (response) {
        // console.log(response);
        setReports(response.data.time_entries);
      })
  },[date])

  return (
    <Card className="shadow-1">
      <CardBody>
        <form onSubmit={handleSubmit(onCreate)} autoComplete="off">
        <input  value={convert(date)} {...register("recorded_at")} hidden />
          <div className="form-layout">
              <Calendar
                onChange={item => {setDate(item)}}
                date={date}
              />
             
            <div>
              <SelectField
                labelText="Select Project"
                name="project_id"
                register={register}
                rules={{ required: true }}
                options={getOptions(projects)}
              />
              <SelectField
                labelText="Select Task"
                name="task_id"
                register={register}
                rules={{ required: true }}
                options={getOptions(tasks, 'id', 'title')}
              />
              <TextAreaField
                labelText="Description"
                name="description"
                register={register}
                rules={{ required: true }}
                placeholder="Enter detail description of task."
              />
              <TextField
                labelText="Time"
                name="hours"
                register={register}
                rules={{ required: true }}
                placeholder="Enter total time taken"
              />
              {/* </div> */}
            </div>
            <div>  <Button type="submit" disabled={submitting}>Submit</Button> </div>

          </div>
        </form>
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
      </CardBody>
    </Card>
  );
}

export default withAuthenticate(TrackerView);