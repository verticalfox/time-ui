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
  return [date.getFullYear(), month, day].join("-");
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
      <td>{props.projectName}</td>
      <td>{props.taskName}</td>
      <td>{props.description}</td>
      <td>{props.hours}</td>
      <td>
        <EditProjectModal buttonLabel="" project__name={props.name} project__description={props.description} project__id={props.id} ></EditProjectModal>&nbsp;&nbsp;&nbsp;&nbsp;
        <DeleteModal buttonLabel="" delete={handleDelete} id={props.id} label="task entry" />
      </td>
    </tr>
  );
}

const TrackerView = () => {

  const { register, handleSubmit, watch, setValue } = useForm();
  const [projectLoading, projects] = useProjects();
  const watchProjectId = watch('project_id');
  const [taskLoading, tasks] = useTasks(watchProjectId);
  const watchDate = watch('recorded_at') || convert(new Date())
  const { submitting, onCreate } = useCreateTimeEntry();
  const [reports, setReports] = useState([]);
  const handleDateChange = (d) => {
    setValue('recorded_at', convert(d));
  }


  // console.log(projectLoading, taskLoading, errors);
  useEffect(() => {
    getRequest({
      url: `time_entries/da8758a9-842d-4659-9e91-bad41a598ecd?start_date=${watchDate}&end_date=${watchDate}`,
    })
      .then(function (response) {
        // console.log(response);
        setReports(response.data.time_entries);
      })
  }, [watchDate])

  return (
    <Card className="shadow-1">
      <CardBody>
        <form onSubmit={handleSubmit(onCreate)} autoComplete="off">

          <div className="form-layout">
            <Calendar onChange={item => { handleDateChange(item) }} date={new Date(watchDate)} />
            <input type="hidden" name="recorded_at" {...register("recorded_at")} />
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
              <Button type="submit" disabled={submitting}>Submit</Button>
            </div>


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
                      project_name={info.projectName}
                      task_name={info.taskName}
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