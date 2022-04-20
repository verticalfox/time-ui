import { useState, useEffect } from 'react';

import { getRequest } from '../utils/http';

export const useProjects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setLoading(true);
    getRequest({
      url: `/project/`,
    })
    .then(function (response) {
      setProjects(response.data.projects);
      setLoading(false);
    })
  }, []);

  return [loading, projects];
}

export const useTasks = (projectId) => {
  const [loading, setLoading] = useState(false);
  const [projectMap, setProjectMap] = useState({});

  useEffect(() => {
    setLoading(true);
    getRequest({
      url: `/task`
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