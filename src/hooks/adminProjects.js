import { useState, useEffect } from 'react';

import { getRequest } from '../utils/http';

export const useProjects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const workspace_id= localStorage.getItem('workspace_id');
  useEffect(() => {
    setLoading(true);
    //   vf- workspace id : 50dcdbab-61df-4713-a4a8-6eaa68a46614
    getRequest({
      // url: `/projects/`,
      url: `/projects/${workspace_id}`,
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
      url: `tasks`
    })
    .then(function (response) {
      setTasks(response.data.tasks);
      setLoading(false);
    })
  }, []);

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
      setLoading(false);
    })
  }, []);

  return [loading, users];
}
