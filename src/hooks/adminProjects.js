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

export const useTasks = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);
    getRequest({
      url: `/task`
    })
    .then(function (response) {
      setTasks(response.data.tasks);
      setLoading(false);
    })
  }, []);

  return [loading, tasks];
}