import React from "react";
import { Button, Card, CardBody ,Input} from "reactstrap";
import { useForm } from 'react-hook-form';

import { SelectField, TextField, TextAreaField } from './Form';

import { useProjects, useTasks } from '../hooks/userProjects';
import { getOptions } from "../utils";
import { useCreateTimeEntry } from '../hooks/useCreateTimeEntry';

const TrackerView = () => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
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
            <span style={{ backgroundColor: "lightblue" }}>
              <Button type="submit" disabled={submitting}>Submit</Button>
            </span>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default TrackerView;




































//   bootstrap form dump code :


//   <div color="light" class="navbar modal-input">
// <form>
//     <div class="mb-3 ">
//         <label for="selectProject" class="form-label"> Select Project</label>
//     <select class="form-select" aria-label="Default select example">
//   <option selected>Open this select menu</option>
//   <option value="1">One</option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
// </select>
//     </div>


// <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Task :</label>
//   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// </div>
// <div class="mb-3">
//   <label for="exampleFormControlTextarea1" class="form-label">Task description :</label>
//   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
// </div>

// <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Assigned to :</label>
//   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// </div>
// <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Total Time Taken :</label>
//   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// </div>

// </form>

// </div>
