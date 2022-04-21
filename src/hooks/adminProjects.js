import { useState, useEffect } from 'react';

import { getRequest } from '../utils/http';

export const useProjects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setLoading(true);
    getRequest({
      url: `/projects/`,
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
