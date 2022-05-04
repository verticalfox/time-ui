import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import { useForm } from 'react-hook-form';
import { SelectField, TextField, TextAreaField } from '../components/Form';
import { useProjects, useTasks } from '../hooks/userProjects';
import { getOptions } from "../utils";
import { useCreateTimeEntry } from '../hooks/useCreateTimeEntry';
import DateField from "../components/Form/DateField";
import { withAuthenticate } from "../Routes";

const TrackerView = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [projectLoading, projects] = useProjects();
  const watchProjectId = watch('project_id');
  const [taskLoading, tasks] = useTasks(watchProjectId);
  const { submitting, onCreate } = useCreateTimeEntry();
  console.log(projectLoading, taskLoading, errors);

  return (
    <Card>
      <CardBody>
        <form onSubmit={handleSubmit(onCreate)} autoComplete="off">
          <input type="hidden" value="2022-04-20" name="entry_date" />
          <div className="tracker-input">
          <DateField
              labelText="Select Date"
              name="recorded_at"
              type="date"
              register={register}
              rules={{ required: true }}
              options={getOptions(projects)}
            />
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
        </form>
      </CardBody>
    </Card>
  );
}

export default withAuthenticate(TrackerView);