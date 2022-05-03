import { useState, useEffect } from 'react';
import { useWorkspaceContext } from '../context/WorkspaceContext';

import { getRequest } from '../utils/http';

export const useProjects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const{workspaceId ,settingWorkspaceId} = useWorkspaceContext();
  useEffect(() => {
    setLoading(true);
    getRequest({
      url: `projects/`,
    })
    .then(function (response) {
      setProjects(response.data.projects);
      setLoading(false);
    })
  }, [workspaceId]);

  return [loading, projects];
}

export const useTasks = (projectId) => {
  const [loading, setLoading] = useState(false);
  const [projectMap, setProjectMap] = useState({});

  useEffect(() => {
    setLoading(true);
    getRequest({
      url: `tasks/`
    })
    .then(function (response) {
      const allTask = response.data.tasks;
      const projectIdMap = allTask.reduce((acc, task) => {
        if(!acc[task.project_id]) {
          acc[task.project_id] = [];
        }
        acc[task.project_id].push(task);
        return acc;
      }, {})
      
      setProjectMap(projectIdMap);
      setLoading(false);
    })
  }, []);

  const tasks = projectMap[projectId] || [];

  return [loading, tasks];
}


export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    getRequest({
      url: `users`,
    })
    .then(function (response) {
      setUsers(response.data.users);
       console.log(response.data.users)
      setLoading(false);
    })
  }, []);

  return [loading, users];
}