import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import ProjectView from "./pages/ProjectView";
import TaskView from "./components/TaskView"
import TrackerView from "./pages/TrackerView";
import UsersView from "./components/UsersView";
import ReportView from "./components/ReportView";
import CreateUser from "./components/CreateUser";
import CreateTask from "./components/CreateTask";
import CreateProject from "./components/CreateProject";
import { PrivateAdminRoutes } from "./Routes";

const Content = ({ sidebarIsOpen = false, toggleSidebar = {} }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Routes>
      <Route path="/" element={<TrackerView />} />
        <Route exact path="/tracker" element={<TrackerView />} />

        <Route element={<PrivateAdminRoutes/>}> 
        <Route path="/projects" element={<ProjectView />} />
        <Route exact path="/reports" element={<ReportView />} />
        <Route exact path="/users" element={<UsersView />} />
        <Route exact path="/projects/:id/view" element={<TaskView />} />
        <Route exact path="/users/create" element={<CreateUser />} />
        <Route exact path="/projects/view/edit" element={<CreateTask />} />
        <Route exact path="/projects/create" element={<CreateProject />} />
        <Route exact path="/projects/edit" element={<CreateProject />} />
        </Route>
    </Routes>
  </Container>
);
export default Content;
