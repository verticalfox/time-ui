import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import ProjectView from "./pages/ProjectView";
import TaskView from "./pages/TaskView"
import TrackerView from "./pages/TrackerView";
import UsersView from "./pages/UsersView";
import ReportView from "./pages/ReportView";
import CreateUser from "./pages/create/CreateUser";
import CreateTask from "./pages/create/CreateTask";
import CreateProject from "./pages/create/CreateProject";
import { PrivateAdminRoutes, PrivateUserRoutes } from "./Routes";
import { useUserContext } from "./context/UserContext";
import { Navigate } from "react-router";
import ProjectViewUser from "./pages/ProjectViewUser";
const Content = ({ sidebarIsOpen = false, toggleSidebar = {} }) => {
  const {isLoggedIn} = useUserContext();
  return(
    isLoggedIn?  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Routes>
      <Route path="/" element={<TrackerView />} />

        <Route element={<PrivateUserRoutes/>}>
        <Route path="/projects/user" element={<ProjectViewUser />} />
        </Route>
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
  </Container>: <Navigate to="/login" />
 
)};
export default Content;
